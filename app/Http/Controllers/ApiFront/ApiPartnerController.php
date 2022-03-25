<?php

namespace App\Http\Controllers\ApiFront;

use App\Http\Resources\PartnerResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Str;
use Hash;
use App\Models\User;
use App\Models\RequestCahngePartnerInfo;
use App\Events\EmailChangeInfoPartner;
use App\Models\PartnerWantJobs;
use App\Models\PartnerRegions;

use App\Http\Resources\ReviewsCollection;

use Intervention\Image\ImageManagerStatic as Image;

class ApiPartnerController extends Controller
{

    /**
     * Show user data.
     *
     */
    public function index()
    {
        return new PartnerResource(User::find(auth()->user()->id));
    }

    /**
     * Update my info.
     * @param  Request $request
     * @return Illuminate\Http\RedirectRespons
     */
    public function update(Request $request){

        $this->validate($request, [
            'regions_partners' => ['required','array'],
            'type_jobs_partners' => ['required','array'],
            'name' => ['required'],
            'company' => ['required'],
            'lastname' => ['required'],
            'phone' => ['required'],
            'city' => ['required'],
            'street' => ['required'],
            'house' => ['required'],
            'postcode' => ['required'],
        ]);


        //if ($request->new_request_update === 'true') {
            RequestCahngePartnerInfo::create([
                'user_id' => auth()->user()->id,
                'json_info' => json_encode($request->only('name', 'lastname', 'company', 'phone', 'city', 'street', 'house', 'postcode')),
            ]);

            event(new EmailChangeInfoPartner(auth()->user()));
        //}

        if ($request->hasFile('avatar')) {
            $name_file = Str::random(15).'.jpg';
            $image = $request->file('avatar');
            $image_save = Image::make($image->getRealPath());
            $image_save->resize(128, 128);
            $image_save->save(storage_path(env('LOCAL_PATH_AVATAR') . $name_file));
            auth()->user()->avatar = $name_file;
            auth()->user()->save();
        }

        PartnerWantJobs::whereUserId(auth()->user()->id)->delete();
        PartnerRegions::whereUserId(auth()->user()->id)->delete();

        foreach($request->type_jobs_partners as $jobId){
            PartnerWantJobs::create(['user_id'=>auth()->user()->id, 'type_job_id'=>$jobId]);
        }

        foreach($request->regions_partners as $regionId){
            PartnerRegions::create(['user_id'=>auth()->user()->id, 'region_id'=>$regionId]);
        }

        return new PartnerResource(User::find(auth()->user()->id));
    }

    /**
     * Update password
     * @param  Request $request
     * @return Illuminate\Http\Response
     */
    public function updatePassword(Request $request)
    {
        $this->validate($request, [
            'old_password' => ['required'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        if (Hash::check($request->old_password , auth()->user()->password )) {

            auth()->user()->password = bcrypt($request->password);
            auth()->user()->save();

            return response()->json(['success'=>true], 200);
        }
        return response()->json(['success'=>false, 'old_password_err'=>__('front.old_password_err')], 401);
    }


    /**
     * Get Reviews
     * @return Illuminate\Http\Response
     */
    public function partnerReviews(){

        return new ReviewsCollection(auth()->user()->getReviews()->get());

    }

}
