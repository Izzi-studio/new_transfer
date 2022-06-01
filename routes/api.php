<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::prefix('front')->middleware('auth:api')->group(function () {
    //client
    Route::prefix('client')->group(function(){
        Route::get('/', [App\Http\Controllers\ApiFront\ApiUserController::class,'index'])->name('api.user.data');
        Route::put('/', [App\Http\Controllers\ApiFront\ApiUserController::class,'update'])->name('api.user.update');
        Route::put('/password/update', [App\Http\Controllers\ApiFront\ApiUserController::class,'updatePassword'])->name('api.user.password.update');

        Route::get('/proposals', [App\Http\Controllers\ApiFront\ApiProposalController::class,'clientProposals'])->name('api.user.proposals');
        Route::get('/proposals/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'show'])->name('api.user.proposals.show');
        Route::delete('/proposals/delete/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'destroy'])->name('api.user.proposals.delete');
        Route::put('/proposals/update/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'update'])->name('api.user.proposals.update');
    });

    //partner
    Route::prefix('partner')->group(function(){
        Route::get('/', [App\Http\Controllers\ApiFront\ApiPartnerController::class,'index'])->name('api.partner.data');
        Route::put('/', [App\Http\Controllers\ApiFront\ApiPartnerController::class,'update'])->name('api.partner.update');
        Route::get('/proposals', [App\Http\Controllers\ApiFront\ApiProposalController::class,'partnerProposals'])->name('api.partner.proposals');
        Route::get('/proposals-counts', [App\Http\Controllers\ApiFront\ApiProposalController::class,'partnerProposalsCounts'])->name('api.partner.proposals.counts');
        Route::put('/proposals/process/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'processProposals'])->name('api.partner.proposals.process');
        Route::put('/proposals/choose-performer/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'choosePerformerProposal'])->name('api.partner.proposals.choose');
        Route::get('/proposals/prices', [App\Http\Controllers\ApiFront\ApiProposalController::class,'prices'])->name('api.partner.prices');
        Route::put('/password/update', [App\Http\Controllers\ApiFront\ApiPartnerController::class,'updatePassword'])->name('api.partner.password.update');
        Route::get('/reviews', [App\Http\Controllers\ApiFront\ApiPartnerController::class,'partnerReviews'])->name('api.partner.reviews');

        //resell
        Route::get('/proposals-resell', [App\Http\Controllers\ApiFront\ApiProposalController::class,'resellList'])->name('api.partner.proposals.resell.list');
        Route::get('/proposals/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'show'])->name('api.partner.proposals.show');
        Route::put('/proposals/update/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'update'])->name('api.partner.proposals.update');
        Route::delete('/proposals/delete/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'destroy'])->name('api.partner.proposals.delete');
    });


    Route::post('add-request', [App\Http\Controllers\ApiFront\ApiProposalController::class, 'store'])->name('proposal.add');

});


Route::prefix('front')->middleware('api')->group(function () {
    Route::get('/companies', [App\Http\Controllers\ApiFront\ApiFrontController::class,'companies'])->name('api.companies');
    Route::get('/regions', [App\Http\Controllers\ApiFront\ApiFrontController::class,'regions'])->name('api.regions');
    Route::get('/types-jobs', [App\Http\Controllers\ApiFront\ApiFrontController::class,'jobsTypes'])->name('api.jobsTypes');


    Route::post('/contact-form', [App\Http\Controllers\ApiFront\ApiFrontController::class,'contactForm'])->name('api.contactForm');



});
