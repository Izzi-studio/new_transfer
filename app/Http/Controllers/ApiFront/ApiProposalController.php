<?php

namespace App\Http\Controllers\ApiFront;

use App\Events\ChoosePerformedProposal;
use App\Events\NewProposal;
use App\Models\TypesOfJobs;
use http\Env\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Proposal;
use App\Models\ProposalToPartner;
use App\Models\Setting;
use App\Http\Resources\ProposalCollection;
use App\Http\Resources\ProposalResource;
use App\Events\ProposalDelete;
use App\Events\ProposalAccepted;
use Log;
use PDF;
use App\Models\User;

class ApiProposalController extends Controller
{

    public function store(Request $request)
    {

        $proposal = $request->only('proposal')['proposal'];

        if(auth()->user()->isPartner()){
            $proposal['resell'] = 1;
        }

        $proposal['user_id'] = auth()->user()->id;
        $proposal['additional_info'] = $request->only('additional_info')['additional_info'];

        event(new NewProposal(Proposal::create($proposal)));

        return response()->json(['redirect_url'=>route('partner.cabinet','antrag-von-firma/verkaufe')]);
    }

    /**
     * Show proposals client.
     *
     */
    public function clientProposals()
    {
        $typeJobsId = request()->get('type_job_id',null);
        if($typeJobsId == null){
            return response()->json(['status'=>false,'err'=>'wrong type jobs']);
        }
        $proposals = auth()->user()->getProposalsByTypeJob($typeJobsId)->get();

        return new ProposalCollection($proposals);
    }

    /**
     * Show proposal.
     * @param Request $request
     * @param Proposal $proposal
     *
     */
    public function choosePerformerProposal(Request $request, Proposal $proposal){


        ProposalToPartner::whereProposalId($proposal->id)
            ->where('user_id','<>', $request->user_id)
            ->forceDelete();


        $proposal->payed = 1;
        $proposal->hide = 1;
        $proposal->save();


        event(new ChoosePerformedProposal($proposal, User::whereId($request->user_id)->first()));

        return response()->json(['status'=>true]);
    }


    /**
     * Show proposals resell.
     *
     */
    public function resellList()
    {
        $typeJobId = request()->get('type_job_id', null);
        $regionId = request()->get('region_id', null);
        $date = request()->get('date', null);

        $proposals = new Proposal();
        $proposals = $proposals->resellNoPay();

        if($date){
            $proposals = $proposals->whereDateStart($date);
        }

        if($regionId){
            $proposals = $proposals->whereIn('region_id',$regionId);
        }

        if($typeJobId){
            $proposals = $proposals->whereIn('type_job_id',$typeJobId);
        }
        $proposals =  $proposals->where('user_id','<>',auth()->user()->id)->whereHide(0);

        return new ProposalCollection($proposals->paginate(10));
    }

    /**
     * @param Request $request
     * Show proposals partner.
     * @return ProposalCollection
     */
    public function partnerProposals(Request $request)
    {
        switch ($request->status) {
            case 'accepted':
                $proposals = auth()->user()->getProposalsByStatusCabinet(1)->get();
                break;
            case 'rejected':
                $proposals = auth()->user()->getProposalsByStatusCabinet(2)->get();
                break;
            case 'resell':
                $proposals = auth()->user()->getResellProposals()->get();
                break;
            case 'resell-accepted':
                $proposals = auth()->user()->getResellProposalsAccept(1)->get();
                break;
            default:
                $proposals = auth()->user()->getNewProposals()->get();
        }

        return new ProposalCollection($proposals);
    }

    /**
     * Proposals count
     * @return Illuminate\Http\Response
     */
    public function partnerProposalsCounts()
    {
        return response()->json([
            'data'=>[
                'all_proposals' => auth()->user()->getProposalsByStatusCabinet(0)->count() + auth()->user()->getProposalsByStatusCabinet(1)->count() ,
                'new_proposals' => auth()->user()->getProposalsByStatusCabinet(0)->count()
            ]
        ], 200);
    }

    /**
     * Show proposal.
     * @param Proposal $proposal
     *
     */
    public function show(Proposal $proposal)
    {

       $proposalOwner = auth()->user()->getProposalsByClient()->whereId($proposal->id)->first();

        return new ProposalResource($proposalOwner);
    }

    /**
     * Show proposal.
     * @param Request $request
     * @param Proposal $proposal
     *
     */
    public function update(Request $request, Proposal $proposal)
    {
        $proposals = auth()->user()->getProposalsByClient()->whereId($proposal->id)->get();
        if($proposals->isEmpty()){
            return response()->json(['result'=>false,'redirect_url'=>route('home')]);
        }
        $proposalData = $request->only('proposal')['proposal'];
        $proposalData['additional_info'] = $request->only('additional_info')['additional_info'];
        $proposal->update($proposalData);



        return response()->json(['result'=>true ,'redirect_url'=>route('client.cabinet',config('services.redirects_params.'.$proposal['type_job_id']))]);
    }


    /**
     * Process Proposal.
     * @param  Request $request
     * @param  Proposal $proposal
     * @return \Illuminate\Http\RedirectResponse
     */
    public function processProposals(Request $request, Proposal $proposal)
    {

        if($proposal->resell == 1){
            return $this->resellProcess($proposal);
        }else{
            return $this->process($proposal);
        }

    }

    private function process(Proposal $proposal){
        $authUser = auth()->user();

        $status = request()->action == 'accepted' ? 1 : 2;

        $proposalToPartner = ProposalToPartner::whereUserId($authUser->id)
            ->where('proposal_id',$proposal->id)
            ->where('status',0)
            ->first();

        if (is_null($proposalToPartner)){
            return response()->json(['data'=>['result'=>false,'message'=>'Your Not owner request']]);
        }

        $price = Setting::getByKey('system.setting.cost_'.config('services.types_jobs.'.$proposal->type_job_id));


        if($status == 1) {
            if ($authUser->status != 1 && $authUser->status != 2) {
                if($authUser->status_pay == 1){

                    if($authUser->coins - $price >= 0) {
                        $authUser->coins = $authUser->coins - $price;
                        $authUser->save();
                    }else{
                        return response()->json(['data'=>['result'=>false ,'no_coin'=>__('front.no_coin')]]);
                    }
                }

                $proposalToPartner->status = $status;
                $proposalToPartner->save();

                Log::info('Partner ID: ' . $authUser->id . ', Name: ' . $authUser->name . ' PAY Proposal ID: ' . $proposal->id.' Price: '.$price);
                event(new ProposalAccepted($proposal));
                Log::info('----DONE----');

                $proposalToPartners = ProposalToPartner::whereProposalId($proposal->id)
                    ->where('status', 1);

                if (Setting::getByKey('system.setting.limit_responded') <= $proposalToPartners->count()) {
                    ProposalToPartner::whereProposalId($proposal->id)
                        ->where('status', 0)
                        ->forceDelete();
                }

                return response()->json(['data'=>['result'=>true]]);


            }else{
                return response()->json(['data'=>['result'=>true,'message'=>__('front.no_paid_invoice')]]);
            }
            return response()->json(['data'=>['result'=>true,'redirect_url'=>route('partner.cabinet','anfragen/angenommene')]]);
        }

        $proposalToPartner->status = $status;
        $proposalToPartner->save();

        return response()->json(['data'=>['result'=>true,'redirect_url'=>route('partner.cabinet','anfragen/angenommene')]]);
    }
    /**
     * download proposal.
     * @param Proposal $proposal
     */
    private function resellProcess(Proposal $proposal){

        $isset = ProposalToPartner::whereProposalId($proposal->id)
            ->where('user_id', auth()->ID())->first();

        if ($isset){
            return response()->json(['data'=>['result'=>false,'message'=>'Isset request']]);
        }


        $authUser = auth()->user();

        $proposalToPartners = ProposalToPartner::where('proposal_id', $proposal->id)
            ->where('status', 1);

        if (Setting::getByKey('system.setting.limit_responded_resell') <= $proposalToPartners->count()) {
            $proposal->hide = 1;
        }
        ProposalToPartner::create([
            'user_id'=>auth()->ID(),
            'proposal_id'=>$proposal->id,
            'status'=> 1,
        ]);

       // $price = (int)$proposal->price;

       /* if($authUser->status_pay == 1){

            if($authUser->coins - $price >= 0) {
                $authUser->coins = $authUser->coins - $price;
                $authUser->save();
            }else{
                return response()->json(['data'=>['result'=>false ,'no_coin'=>__('front.no_coin')]]);
            }
        } */

        Log::info('Partner ID: ' . $authUser->id . ', Name: ' . $authUser->name . ' PAY Proposal Resell ID: ' . $proposal->id);
        event(new ProposalAccepted($proposal));
        Log::info('----DONE----');

        //$proposal->payed = 1;
        $proposal->save();

        return response()->json(['data'=>['result'=>true,'message'=>'Success']]);
    }

    /**
     * download proposal.
     * @param Proposal $proposal
     * @return PDF
     */
    public function download(Proposal $proposal){

        if($proposal->resell == 1){
            $cost = (int)$proposal->price;
        }else{
            $cost = Setting::getByKey('system.setting.cost_'.config('services.types_jobs.'.$proposal->type_job_id));
        }
        $pdf = PDF::loadView('front.partner.proposalPDF',compact(['proposal','cost']));

        return $pdf->download('anfragen_'. $proposal->date_start->format('Y-m-d') .'.pdf');
    }
    /**
     * List prices request.
     * @return Response
     */
    public function prices(){
        $typesJobs = TypesOfJobs::all();

        $result = [];

        foreach ($typesJobs as $typesJob){
            $result[$typesJob->name] = Setting::getByKey('system.setting.cost_'.config('services.types_jobs.'.$typesJob->id));
        }

        return response()->json(['data'=>['prices'=>$result]]);
    }
    /**
     * delete proposal.
     * @param Proposal $proposal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Proposal $proposal){

        $proposals = auth()->user()->getProposalsByClient()->whereId($proposal->id)->get();
        if($proposals->isEmpty()){
            return response()->json(['data'=>['result'=>false,'message'=> 'your not owner']]);
        }

        event(new ProposalDelete($proposal));
        $proposal->getReviews()->delete();
        $proposal->getReceivedInvitation()->forceDelete();
        $proposal->forceDelete();


        return response()->json(['data'=>['result'=>true]]);
    }

}
