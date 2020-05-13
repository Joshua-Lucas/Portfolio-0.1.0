<?php

namespace App\Http\Controllers;

use App\Mail\ContactMe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact');
    }

    public function show()
    {
        //
    }

    public function store()
    {

        Mail::to('joshualucasportfolio@gmail.com')
            ->send(new ContactMe(request('name'), request('email'), request('reason'), request('response')));
    }
}
