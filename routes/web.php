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

    //forms
    Route::get('/umzug', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugFormClientView'])->name('client.form.umzug.view');
    Route::get('/reinigung', [App\Http\Controllers\Auth\RegisterController::class, 'showReinigungFormClientView'])->name('client.form.reinigung.view');
    Route::get('/umzug-und-reinigung', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugUndReinigungFormClientView'])->name('client.form.umzugundreinigung.view');
    Route::get('/malar', [App\Http\Controllers\Auth\RegisterController::class, 'showMalarFormClientView'])->name('client.form.malar.view');
    Route::get('/bodenleger', [App\Http\Controllers\Auth\RegisterController::class, 'showBodenlegerFormClientView'])->name('client.form.bodenleger.view');
    Route::get('/heizung', [App\Http\Controllers\Auth\RegisterController::class, 'showHeizungFormClientView'])->name('client.form.heizung.view');
    Route::get('/elektriker', [App\Http\Controllers\Auth\RegisterController::class, 'showElektrikerFormClientView'])->name('client.form.elektriker.view');
    Route::get('/gartner', [App\Http\Controllers\Auth\RegisterController::class, 'showGartnerFormClientView'])->name('client.form.gartner.view');
    Route::get('/schreiner', [App\Http\Controllers\Auth\RegisterController::class, 'showSchreinerFormClientView'])->name('client.form.schreiner.view');

});





Route::post('register-client', [App\Http\Controllers\Auth\RegisterController::class,'newClientAndSaveProposal'])->name('client.register.post');
Route::post('check-email', [App\Http\Controllers\Auth\RegisterController::class,'checkEmail'])->name('client.check.email');

Route::post('add-request', [App\Http\Controllers\ProposalController::class, 'store'])->name('proposal.add');

