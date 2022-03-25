<?php
namespace App\Traits;
use App\Models\PartnerRegions;
use App\Models\PartnerWantJobs;
use Illuminate\Http\Request;
use Str;
use Hash;
use App\Models\User;
use App\Models\Proposal;
use App\Models\Setting;
trait PartnerInfoTrait{


    /**
     * show list accept proposals.
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function profile(Request $request, User $user){

        $proposalId = $request->get('proposal_id',null);

        $regions = app()->make(PartnerRegions::class);
        $regions = $regions->getCheckedRegionByUser($user->id);

        $typesofjobs = app()->make(PartnerWantJobs::class);
        $typesofjobs =$typesofjobs->getCheckedTypesJobByUser($user->id);

        $reviews = $user->getReviews()->paginate(Setting::getByKey('system.setting.limit_reviews_partner'));

        return view('front.partner.profile',compact(['regions','typesofjobs','reviews','user','proposalId']));
    }

    public function profileProxy(User $user, Proposal $proposal){

        return redirect(route('partner.profile',[$user->profile_slug,'proposal_id'=>$proposal->id]));


    }

    public function createReview(User $user, Proposal $proposal){

        return view('front.partner.create_review',compact(['user','proposal']));
    }
}
