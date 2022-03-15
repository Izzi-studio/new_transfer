<?php

namespace App\Http\Controllers\ApiFront;

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
class ApiProposalController extends Controller
{

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
                'all_proposals' => auth()->user()->getCountProposalsCabinet(),
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
        $authUser = auth()->user();
        $status = $request->action == 'accepted' ? 1 : 2;

        $proposalToPartner = ProposalToPartner::whereUserId($authUser->id)
            ->where('proposal_id',$proposal->id)
            ->where('status',0)
            ->first();

        if (is_null($proposalToPartner)){
            return response()->json(['data'=>['result'=>false,'message'=>'Not your request']]);
        }

        switch ($proposal['type_job_id']) {
            case 1:
                $price = Setting::getByKey('system.setting.cost_transfer');
                break;
            case 2:
                $price = Setting::getByKey('system.setting.cost_cleaning');
                break;
            case 3:
                $price = Setting::getByKey('system.setting.cost_transfer_cleaning');
                break;
            case 4:
                $price = Setting::getByKey('system.setting.cost_malar');
                break;
            case 5:
                $price = Setting::getByKey('system.setting.bodenleger');
                break;
            case 6:
                $price = Setting::getByKey('system.setting.cost_malar');
                break;
            case 7:
                $price = Setting::getByKey('system.setting.cost_malar');
                break;
            case 8:
                $price = Setting::getByKey('system.setting.cost_malar');
                break;
            case 9:
                $price = Setting::getByKey('system.setting.cost_malar');
                break;
            default:
                $price = 0;
                Log::info('Wrong Job Type on pay: '.$proposal['type_job_id']);
        }


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
              //  return redirect()->route('partner.getAcceptedRequests');

            }else{
                return response()->json(['data'=>['result'=>true,'message'=>__('front.no_paid_invoice')]]);
            }
        }
        $proposalToPartner->status = $status;
        $proposalToPartner->save();

        return response()->json(['data'=>['result'=>true,'redirect_url'=>route('partner.cabinet','anfragen/angenommene')]]);
    }


    /**
     * delete proposals.
     * @param Proposal $proposal
     */
    public function destroy(Proposal $proposal){
        event(new ProposalDelete($proposal));

        $proposal->getReviews()->delete();
        $proposal->getReceivedInvitation()->forceDelete();
        $proposal->forceDelete();
        return response()->json(['data'=>['result'=>true]]);
    }

}
