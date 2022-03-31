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

    /**
     * Show contacts.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function search()
    {
        app()->make(SeoMetaTags::class)->setMeta('system.search');
        return view('front.search_companies');
    }

    /**
     * Show contacts.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function resell()
    {
        app()->make(SeoMetaTags::class)->setMeta('system.resell');
        return view('front.partner.resell');
    }
}
