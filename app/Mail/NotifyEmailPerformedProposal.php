<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Proposal;

class NotifyEmailPerformedProposal extends Mailable
{
    use Queueable, SerializesModels;
    public $proposal;
    public $partner;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Proposal $proposal, User $partner)
    {
        $this->proposal = $proposal;
        $this->partner  = $partner;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->markdown('emails.partner.notification_performed_proposal')->subject('Performed');
    }
}
