<?php

namespace App\Http\Controllers\Admin;

use App\Events\NotifyPartner;
use App\Http\Controllers\Controller;
use App\Models\Proposal;
use App\Models\ProposalToPartner;
use App\Events\ProposalDelete;
use App\Models\User;
use Illuminate\Http\Request;

class ProposalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $proposals = Proposal::orderBy('id','DESC')->whereResell(0)->get();
        $resell = false;
        return view('admin.proposal.list',compact(['proposals','resell']));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function resellLest()
    {
        $proposals = Proposal::resell()->orderBy('id','DESC')->get();
        $resell = true;
        return view('admin.proposal.list',compact(['proposals','resell']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Proposal  $proposal
     * @return \Illuminate\Http\Response
     */
    public function edit(Proposal $proposal)
    {
        $suitableUsers = User::GetMatchingConditionUsers($proposal->region_id,$proposal->type_job_id)
            ->get();

        $proposalToPartner = ProposalToPartner::whereProposalId($proposal->id)
            ->pluck('user_id')
            ->toArray();

        $suitableUsers->filter(function($item) use ($proposalToPartner) {
            return in_array($item->user_id, $proposalToPartner) ? $item->checked = true : $item->checked = false;
        });



        return view('admin.proposal.edit',compact(['proposal','suitableUsers']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Proposal $proposal)
    {
        $proposalToPartner = ProposalToPartner::whereProposalId($proposal->id)
            ->pluck('user_id')
            ->toArray();

        $insertData = array();
        $emailsNotifyList = array();

        ProposalToPartner::whereProposalId($proposal->id)->whereStatus(0)
            ->forceDelete();

        if ($request->invitations) {

            foreach ($request->invitations as $invitation) {
                if (!in_array($invitation, $proposalToPartner)) {

                    $user = User::find($invitation);
                    $emailsNotifyList[] = [
                        'email' => $user->email,
                        'name' => $user->name,
                    ];
                }
                $responded = ProposalToPartner::whereProposalId($proposal->id)
                    ->whereStatus('!=',0)
                    ->whereUserId($invitation)
                    ->get();

                if($responded->isEmpty()){
                    $insertData[] = [
                        'proposal_id' => $proposal->id,
                        'user_id' => $invitation,
                        'status' => 0,
                    ];
                }

            }
            ProposalToPartner::insert($insertData);

			if(!empty($emailsNotifyList)){

				event(new NotifyPartner($emailsNotifyList,$proposal));
			}
        }
        return redirect(route('proposals.index'))->with('success', __('admin/admin.proposal_updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Proposal $proposal)
    {
		event(new ProposalDelete($proposal));
        $proposal->getReviews()->delete();
        $proposal->getReceivedInvitation()->delete();
        $proposal->delete();


        return back();
    }
}
