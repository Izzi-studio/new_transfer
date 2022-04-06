<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;
    public $email;
    public $name;
    public $description;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email, $name, $description)
    {
        $this->email = $email;
        $this->name = $name;
        $this->description = $description;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.contact-form')->subject('contact-form');
    }
}
