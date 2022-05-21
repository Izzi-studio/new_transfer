<?php

namespace App\Events;

use App\Models\Proposal;
use App\Models\User;
use Illuminate\Queue\SerializesModels;

class ChoosePerformedProposal
{
    use SerializesModels;

    public $proposal;
    public $partner;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Proposal $proposal, User $partner)
    {
        $this->proposal = $proposal;
        $this->partner = $partner;
    }
}
