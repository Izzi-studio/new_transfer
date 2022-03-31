<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SeoMetaTags;
use App\Models\Faq;
use App\Models\ReviewsOnMainPage;

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
        $faqs = Faq::all();
        $reviews = ReviewsOnMainPage::orderBy('id','DESC')->get();
        return view('home',compact(['faqs','reviews']));
    }
}
