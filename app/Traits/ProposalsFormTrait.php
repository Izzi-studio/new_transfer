<?php
namespace App\Traits;

use App\Models\SeoMetaTags;
use Auth;
use App\Models\Regions;
use Illuminate\Http\Request;

use App\Models\ReviewsOnMainPage;
use Artesaos\SEOTools\Facades\SEOMeta;
use App\Models\Faq;

trait ProposalsFormTrait {

    /**
     * Show Form Transfer.
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function showUmzugFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_transfer');
        $zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::transfer()->get();

        return view('front.client.forms.umzug-form', compact(['action','zip']));
    }

    /**
     * Show Form Transfer+Cleaning.
     *
     * @return \Illuminate\View\View
     */
    public function showFormTransferAndСleaning(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_transfer_and_cleaning');
		$zip = $request->zip;
        $regions = Regions::all();
        $action = Auth::user() ? route('formStore') : route('registerClient');


		$reviews = ReviewsOnMainPage::all();
		$faqs = Faq::transferCleaning()->get();

        return view('front.client.transfer-cleaning-form', compact(['action','regions','zip','reviews','faqs']));
    }

    /**
     * Show Form Cleaning.
     *
     * @return \Illuminate\View\View
     */
    public function showReinigungFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_cleaning');
		$zip = $request->zip;
       // $regions = Regions::all();
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::cleaning()->get();

        return view('front.client.reinigung-form', compact(['action','zip']));
    }

    /**
     * Show Form Painting Work.
     *
     * @return \Illuminate\View\View
     */
    public function showFormPaintingWork(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_painting_work');
		$zip = $request->zip;
        $regions = Regions::all();
        $action = Auth::user() ? route('formStore') : route('registerClient');

		$reviews = ReviewsOnMainPage::all();
		$faqs = Faq::malar()->get();

        return view('front.client.painting-form', compact(['action','regions','zip','reviews','faqs']));
    }
}
