<?php

namespace App\Listeners;

use App\Events\ChoosePerformedProposal;

use App\Mail\NotifyEmailPerformedProposal;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Log;
use Illuminate\Support\Facades\Mail;

class PerformedProposalListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ProposalAccepted  $event
     * @return void
     */
    public function handle(ChoosePerformedProposal $event)
    {
        $mailable = new NotifyEmailPerformedProposal($event->proposal, $event->partner);
        Mail::to($event->partner->email)->queue($mailable);

        Log::info('Proposal performed ID: '.$event->partner->id.' - User ID: '. auth()->user()->id);

    }
}
