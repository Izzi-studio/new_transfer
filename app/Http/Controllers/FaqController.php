<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;
use App\Models\SeoMetaTags;

class FaqController extends Controller
{

    /**
     * Show faq.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function faqView()
    {
        app()->make(SeoMetaTags::class)->setMeta('system.faq');
        $faqs = Faq::orderBy('type_job_id')->get();
        return view('front.faq',compact(['faqs']));
    }
}
