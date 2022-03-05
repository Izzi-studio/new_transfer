<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SeoMetaTags;

class PageController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function thanksPartnerRegisterView()
    {
        return view('thanks');
    }

    /**
     * Show contacts.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function contacts()
    {
        app()->make(SeoMetaTags::class)->setMeta('system.contacts');
        return view('front.contacts');
    }
}
