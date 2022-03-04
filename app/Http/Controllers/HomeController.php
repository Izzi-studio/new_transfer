<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SeoMetaTags;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        app()->make(SeoMetaTags::class)->setMeta('system.main_page');
        return view('home');
    }
}
