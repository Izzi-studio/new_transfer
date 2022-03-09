<?php

namespace App\Http\Controllers\ApiFront;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Proposal;
use App\Http\Resources\ProposalCollection;

class ApiProposalController extends Controller
{

    /**
     * Show regions.
     *
     */
    public function index()
    {
        $typeJobsId = request()->get('type_job_id',null);

        $proposals = auth()->user()->getProposalsByTypeJob($typeJobsId)->get();

        return new ProposalCollection($proposals);
    }

}
