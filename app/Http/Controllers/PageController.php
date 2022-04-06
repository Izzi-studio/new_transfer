<?php

namespace App\Http\Controllers;

use App\Models\StaticPage;
use Illuminate\Http\Request;
use App\Models\SeoMetaTags;
use App\Models\CustomPage;
use App\Models\Blog;
use App\Models\BlogCategories;
use App\Models\Faq;
use App\Models\ReviewsOnMainPage;
use App\Models\Regions;

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

    /**
     * Show custompage.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function customPage(Request $request, $type ,$customPage)
    {

        $types = [
            1 => 'umzug',
            2 => 'reinigung',
            3 => 'umzug-und-reinigung',
            4 => 'maler',
            5 => 'bodenleger',
            6 => 'heizung',
            7 => 'elektriker',
            8 => 'gartner',
            9 => 'schreiner',
        ];

        $job_id = array_search($type,$types);

        $customPage = CustomPage::whereTypeJobId($job_id)->whereSlug($customPage)->first();

        if(is_null($customPage)){
            return abort(404);
        }

        app()->make(SeoMetaTags::class)->setMeta('custom_page',$customPage->id);


        switch ($customPage->type_job_id) {
            case 1:
                $templ = 'umzug';
                $faqs = Faq::transfer()->get();
                break;
            case 2:
                $templ = 'reinigung';
                $faqs = Faq::cleaning()->get();
                break;
            case 3:
                $templ = 'umzug-und-reinigung';
                $faqs = Faq::transferCleaning()->get();
                break;
            case 4:
                $templ = 'malar';
                $faqs = Faq::malar()->get();
                break;
            case 5:
                $templ = 'bodenleger';
                $faqs = Faq::bodenleger()->get();
                break;
            case 6:
                $templ = 'heizung';
                $faqs = Faq::heizung()->get();
                break;
            case 7:
                $templ = 'elektriker';
                $faqs = Faq::elektriker()->get();
                break;
            case 8:
                $templ = 'gartner';
                $faqs = Faq::gartner()->get();
                break;
            case 9:
                $templ = 'schreiner';
                $faqs = Faq::schreiner()->get();
                break;
            default:
                Log::info('Render error. Wrong Job Type: '.$customPage->type_job_id);
        }

        $zip = $request->zip;
        $regions = Regions::all();
        $action = auth()->user() ? route('proposal.add') : route('registerClient');

        $reviews = ReviewsOnMainPage::all();




        return view('front.custom_pages.'.$templ,compact(['customPage','action','regions','zip','reviews','faqs']));
    }

    /**
     * Show sitemapXml.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function sitemapXml()
    {
        $slug[] = route('home').'@2022-01-03@1.0';
        $slug[] = route('page.faq.view').'@2022-01-04@0.9';
        $slug[] = route('page.contacts.view').'@2022-01-05@0.9';
        $slug[] = route('partner.register.view').'@2022-01-06@0.9';
        $slug[] = route('client.form.umzug.view').'@2022-01-07@0.9';
        $slug[] = route('client.form.reinigung.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.umzug_und_reinigung.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.malar.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.bodenleger.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.heizung.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.elektriker.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.gartner.view').'@2022-01-08@0.9';
        $slug[] = route('client.form.schreiner.view').'@2022-01-08@0.9';

        $slug[] = route('sitemap').'@2022-01-11@0.9';

        foreach(BlogCategories::all() as $blogCat){
            $slug[] = route('blog.category.view',$blogCat->slug).'@'.$blogCat->created_at->format('Y-m-d').'@0.9';
        };

        foreach(Blog::all() as $blog){
            $slug[] = route('blog.post.view',[$blog->getBlogCategory->slug,$blog->slug]).'@'.$blog->created_at->format('Y-m-d').'@0.9';
        };

        foreach(StaticPage::all() as $spage){
            $slug[] = route('staticpage.view',$spage->slug).'@'.$spage->created_at->format('Y-m-d').'@0.9';
        };

        foreach(CustomPage::all() as $cpage){
            $slug[] = route('custom-page.view',[$cpage->getTypeSlug(),$cpage->slug]).'@'.$cpage->created_at->format('Y-m-d').'@0.9';
        };

        return response()->view('front.sitemap',['slug'=>$slug])->header('Content-Type', 'text/xml');
    }
    /**
     * Show sitemap.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function sitemap()
    {
        $pages = CustomPage::orderBy('type_job_id')->get();

        $result = [];
        foreach($pages as $page){
            $result[__('front.'.$page->getTypeSlug())][] = [
                'name'=>$page->name,
                'url' =>route('custom-page.view',[$page->getTypeSlug(),$page->slug])
            ];
        }

        app()->make(SeoMetaTags::class)->setMeta('system.sitemap');
        return view('sitemap',compact(['result']));
    }


}
