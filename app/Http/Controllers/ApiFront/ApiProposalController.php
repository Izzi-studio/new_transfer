<?php

namespace App\Http\Controllers\ApiFront;

use http\Env\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Proposal;
use App\Http\Resources\ProposalCollection;
use App\Http\Resources\ProposalResource;
use App\Events\ProposalDelete;

class ApiProposalController extends Controller
{

    /**
     * Show proposals.
     *
     */
    public function index()
    {
        $typeJobsId = request()->get('type_job_id',null);

        $proposals = auth()->user()->getProposalsByTypeJob($typeJobsId)->get();

        return new ProposalCollection($proposals);
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
            return response()->json(['redirect_url'=>route('home')]);
        }
        $proposalData = $request->only('proposal')['proposal'];
        $proposalData['additional_info'] = $request->only('additional_info')['additional_info'];
        $proposal->update($proposalData);



        return response()->json(['redirect_url'=>route('client.cabinet',config('services.redirects_params.'.$proposal['type_job_id']))]);
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
    }

}
