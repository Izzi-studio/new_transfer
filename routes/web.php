<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group([
    'prefix'=> LaravelLocalization::setLocale(),
    'middleware'=> ['localeSessionRedirect', 'localizationRedirect']
], function ($router) {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



    //register partner
    Route::get('/partner-werden', [App\Http\Controllers\Auth\RegisterController::class, 'registerPartnerView'])->name('partner.register.view');
    Route::post('/partner-werden', [App\Http\Controllers\Auth\RegisterController::class,'registerPartner'])->name('partner.register.post');

    //success register partner page
    Route::get('/fertig', [App\Http\Controllers\PageController::class, 'thanksPartnerRegisterView'])->name('partner.register.thanks.view');

    //blog
    Route::get('ratgeber/{blogCategory:slug}', [App\Http\Controllers\BlogController::class, 'сategoryView'])->name('blog.category.view');
    Route::get('ratgeber/{blogCategory:slug}/{post:slug}', [App\Http\Controllers\BlogController::class, 'postView'])->name('blog.post.view');

    //faq
    Route::get('/faq', [App\Http\Controllers\FaqController::class, 'faqView'])->name('page.faq.view');

    //contact
    Route::get('/kontakt',[App\Http\Controllers\PageController::class,'contacts'])->name('page.contacts.view');

    //search page
    Route::get('/firmen', [App\Http\Controllers\PageController::class,'search'])->name('page.search.view');

    //resell
    Route::get('/resell', [App\Http\Controllers\PageController::class,'resell'])->name('partner.resell.view');

    //forms
    Route::get('/umzug', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugFormClientView'])->name('client.form.umzug.view');
    Route::get('/reinigung', [App\Http\Controllers\Auth\RegisterController::class, 'showReinigungFormClientView'])->name('client.form.reinigung.view');
    Route::get('/umzug-und-reinigung', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugUndReinigungFormClientView'])->name('client.form.umzug_und_reinigung.view');
    Route::get('/maler', [App\Http\Controllers\Auth\RegisterController::class, 'showMalarFormClientView'])->name('client.form.malar.view');
    Route::get('/bodenleger', [App\Http\Controllers\Auth\RegisterController::class, 'showBodenlegerFormClientView'])->name('client.form.bodenleger.view');
    Route::get('/heizung', [App\Http\Controllers\Auth\RegisterController::class, 'showHeizungFormClientView'])->name('client.form.heizung.view');
    Route::get('/elektriker', [App\Http\Controllers\Auth\RegisterController::class, 'showElektrikerFormClientView'])->name('client.form.elektriker.view');
    Route::get('/gartner', [App\Http\Controllers\Auth\RegisterController::class, 'showGartnerFormClientView'])->name('client.form.gartner.view');
    Route::get('/schreiner', [App\Http\Controllers\Auth\RegisterController::class, 'showSchreinerFormClientView'])->name('client.form.schreiner.view');

    //forms resell
    Route::get('/umzug-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugFormClientView'])->name('partner.form.umzug.view');
    Route::get('/reinigung-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showReinigungFormClientView'])->name('partner.form.reinigung.view');
    Route::get('/umzug-und-reinigung-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugUndReinigungFormClientView'])->name('partner.form.umzug_und_reinigung.view');
    Route::get('/maler-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showMalarFormClientView'])->name('partner.form.malar.view');
    Route::get('/bodenleger-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showBodenlegerFormClientView'])->name('partner.form.bodenleger.view');
    Route::get('/heizung-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showHeizungFormClientView'])->name('partner.form.heizung.view');
    Route::get('/elektriker-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showElektrikerFormClientView'])->name('partner.form.elektriker.view');
    Route::get('/gartner-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showGartnerFormClientView'])->name('partner.form.gartner.view');
    Route::get('/schreiner-anfrage-verkaufen', [App\Http\Controllers\Auth\RegisterController::class, 'showSchreinerFormClientView'])->name('partner.form.schreiner.view');

    Route::get('/proposal/edit/{proposal}',[App\Http\Controllers\Auth\RegisterController::class, 'showEditFormClientView']);

    Route::get('/benutzerkonto/{any?}', function (){
        return view('client');
    })->where('any', '[\/\w\.-]*')->name('client.cabinet');

    Route::get('/firmenkonto/{any?}', function (){
        return view('firma');
    })->where('any', '[\/\w\.-]*')->name('partner.cabinet');

    //static pages
    Route::get('{staticPage:slug}',[App\Http\Controllers\StaticPageController::class,'staticPageView'])->name('staticpage.view');

    //proposal download
    Route::get('/proposals/download/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'download'])->name('partner.proposals.download');


    Route::get('/firmenprofil/{user:profile_slug}/{proposal}', [App\Http\Controllers\Partner\PartnerController::class,'profileProxy'])->name('partner.profile.profile_proxy');
    Route::get('/firmenprofil/{user:profile_slug}', [App\Http\Controllers\Partner\PartnerController::class,'profile'])->name('partner.profile');
    Route::get('/firmenprofil/{user:profile_slug}/review/create/{proposal}', [App\Http\Controllers\Partner\PartnerController::class,'createReview'])->name('partner.profile.create_review');


});





Route::post('register-client', [App\Http\Controllers\Auth\RegisterController::class,'newClientAndSaveProposal'])->name('client.register.post');
Route::post('check-email', [App\Http\Controllers\Auth\RegisterController::class,'checkEmail'])->name('client.check.email');

//Route::post('add-request', [App\Http\Controllers\ProposalController::class, 'store'])->name('proposal.add');

