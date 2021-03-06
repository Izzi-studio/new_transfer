<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        'App\Events\RegisterClient' => [
            'App\Listeners\RegisterClientListener',
        ],
        'App\Events\RegisterPartner' => [
            'App\Listeners\RegisterPartnerListener',
        ],
        'App\Events\NewProposal' => [
            'App\Listeners\NewProposalListener',
        ],
        'App\Events\NotifyPartner' => [
            'App\Listeners\SendNotifyEmailPartner',
        ],
        'App\Events\ProposalAccepted' => [
            'App\Listeners\ProposalAcceptedListener',
        ],
        'App\Events\ProposalDelete' => [
            'App\Listeners\ProposalDeleteListener',
        ],
        'App\Events\SendInvoicePartner' => [
            'App\Listeners\SendInvoicePartnerListener',
        ],
        'App\Events\EmailChangeInfoPartner' => [
            'App\Listeners\EmailChangeInfoPartnerListener',
        ],
        'App\Events\ChoosePerformedProposal' => [
            'App\Listeners\PerformedProposalListener',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
