<?php

namespace App\Http\Controllers\ApiFront;

use App\Http\Resources\CompaniesCollection;
use App\Mail\ContactForm;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\RegionCollection;
use App\Http\Resources\TypeJobCollection;
use App\Models\Regions;
use App\Models\TypesOfJobs;
use App\Models\User;
use App\Models\PartnerWantJobs;
use App\Models\PartnerRegions;
use Illuminate\Support\Facades\Mail;

class ApiFrontController extends Controller
{

    /**
     * Show regions.
     *
     */
    public function regions()
    {
        return new RegionCollection(Regions::all());
    }

    public function jobsTypes()
    {
        return new TypeJobCollection(TypesOfJobs::all());
    }

    public function companies()
    {
        $typeJobId = request()->get('type_job_id', null);
        $regionId = request()->get('region_id', null);

        $result = User::companies();

        if($typeJobId && !$regionId){
           $resultT = PartnerWantJobs::whereIn('type_job_id',$typeJobId)->pluck('user_id')->toArray();
           $result = $result->whereIn('id',$resultT);
        }

        if(!$typeJobId && $regionId){
           $resultR = PartnerRegions::whereIn('region_id', $regionId)->pluck('user_id')->toArray();
           $result = $result->whereIn('id',$resultR);
        }


        if($typeJobId && $regionId){
           $resultT = PartnerWantJobs::whereIn('type_job_id',$typeJobId)->pluck('user_id');
           $resultR =  PartnerRegions::whereIn('region_id', $regionId)->pluck('user_id');
           $outIdsUser= $resultT->intersect($resultR)->toArray();

           $result = $result->whereIn('id',$outIdsUser);

        }

        return new CompaniesCollection($result->paginate(12));
    }

    public function contactForm()
    {

        $mailable = new ContactForm(request()->email,request()->name,request()->description);
        Mail::to('dv@gg.com')->queue($mailable);
        return response()->json(['success'=>true]);
    }


}

