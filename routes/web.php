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
    Route::get('/partner-werden', [App\Http\Controllers\Auth\RegisterController::class, 'registerPartnerView'])->name('partner.register.view');
    Route::post('/partner-werden', [App\Http\Controllers\Auth\RegisterController::class,'registerPartner'])->name('partner.register.post');
    Route::get('/fertig', [App\Http\Controllers\PageController::class, 'thanksPartnerRegisterView'])->name('partner.register.thanks.view');
});

Route::get('/umzug', [App\Http\Controllers\Auth\RegisterController::class, 'showUmzugFormClientView'])->name('client.form.umzug.view');
Route::post('register-client', [App\Http\Controllers\Auth\RegisterController::class,'newClientAndSaveProposal'])->name('client.register.post');



