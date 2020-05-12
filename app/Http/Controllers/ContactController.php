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
        $response = request()->all();

        return $response;

        // Mail::to($email)
        //     ->send(new ContactMe(request('Name'), request('Name'), request('Name'), request('Name')));
    }
}
