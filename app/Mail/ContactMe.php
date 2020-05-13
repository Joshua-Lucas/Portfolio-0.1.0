<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMe extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $reason;
    public $response;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $reason, $response)
    {
        $this->name = $name;
        $this->email = $email;
        $this->reason = $reason;
        $this->response = $response;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {


        return $this->view('Email')
            ->cc('joshuamlucas91@gmail.com')
            ->subject('Connection from your Portfolio');
    }
}
