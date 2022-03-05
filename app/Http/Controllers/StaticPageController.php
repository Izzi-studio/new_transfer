<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StaticPage;
use App\Models\SeoMetaTags;

class StaticPageController extends Controller
{

    /**
     * Show staticpage.
     * @param StaticPage $staticPage
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function staticPageView(StaticPage $staticPage)
    {
        app()->make(SeoMetaTags::class)->setMeta('static_page',$staticPage->id);
        return view('front.static_pages.'.$staticPage->layout,compact(['staticPage']));
    }
}
