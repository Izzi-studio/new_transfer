<?php

namespace App\Http\Controllers\ApiFront;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\RegionCollection;
use App\Http\Resources\TypeJobCollection;
use App\Models\Regions;
use App\Models\TypesOfJobs;

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
}
