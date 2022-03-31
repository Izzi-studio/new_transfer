<?php
namespace App\Traits;

use App\Models\Proposal;
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
    public function showUmzugUndReinigungFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_transfer_and_cleaning');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');


		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::transferCleaning()->get();

        return view('front.client.forms.umzug-reinigung-form', compact(['action','zip']));
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
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::cleaning()->get();

        return view('front.client.forms.reinigung-form', compact(['action','zip']));
    }

    /**
     * Show Form Malar Work.
     *
     * @return \Illuminate\View\View
     */
    public function showMalarFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_painting_work');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::malar()->get();

        return view('front.client.forms.malar-form', compact(['action','zip']));
    }

    /**
     * Show Form Bodenleger Work.
     *
     * @return \Illuminate\View\View
     */
    public function showBodenlegerFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_bodenleger');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::malar()->get();

        return view('front.client.forms.bodenleger-form', compact(['action','zip']));
    }

    /**
     * Show Form Heizung.
     *
     * @return \Illuminate\View\View
     */
        public function showHeizungFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_heizung');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::malar()->get();

        return view('front.client.forms.heizung-form', compact(['action','zip']));
    }

    /**
     * Show Form Elektriker.
     *
     * @return \Illuminate\View\View
     */
        public function showElektrikerFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_elektriker');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::malar()->get();

        return view('front.client.forms.elektriker-form', compact(['action','zip']));
    }


    /**
     * Show Form Gartner.
     *
     * @return \Illuminate\View\View
     */
        public function showGartnerFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_gartner');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::malar()->get();

        return view('front.client.forms.gartner-form', compact(['action','zip']));
    }

    /**
     * Show Form Schreiner.
     *
     * @return \Illuminate\View\View
     */
        public function showSchreinerFormClientView(Request $request)
    {
        app()->make(SeoMetaTags::class)->setMeta('system.client.form_schreiner');
		$zip = $request->zip;
        $action = Auth::user() ? route('proposal.add') : route('client.register.post');

		//$reviews = ReviewsOnMainPage::all();
		//$faqs = Faq::malar()->get();

        return view('front.client.forms.schreiner-form', compact(['action','zip']));
    }

    ////////////////////////////////////////////////////////////////////////////////


    /**
     * Show Edit Form.
     * @param Proposal $proposal
     * @return \Illuminate\View\View
     */
    public function showEditFormClientView(Proposal $proposal) {

        switch ($proposal['type_job_id']) {
            case 1:
                $template = 'umzug-form';
                break;
            case 2:
                $template = 'reinigung-form';
                break;
            case 3:
                $template = 'umzug-reinigung-form';
                break;
            case 4:
                $template = 'malar-form';
                break;
            case 5:
                $template = 'bodenleger-form';
                break;
            case 6:
                $template = 'heizung-form';
                break;
            case 7:
                $template = 'elektriker-form';
                break;
            case 8:
                $template = 'gartner-form';
                break;
            case 9:
                $template = 'schreiner-form';
                break;
            default:
                Log::info('Add Request. Wrong Job Type: '.$proposal['type_job_id']);
                return response()->json(['url'=> route('client.myInfo')]);
        }
        $action = route('api.user.proposals.update',$proposal->id);


        return view('front.client.forms.'.$template, compact(['action']));
    }
}
