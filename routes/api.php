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
    Route::get('/client', [App\Http\Controllers\ApiFront\ApiUserController::class,'index'])->name('api.user.data');
    Route::put('/client', [App\Http\Controllers\ApiFront\ApiUserController::class,'update'])->name('api.user.update');
    Route::put('/client/password/update', [App\Http\Controllers\ApiFront\ApiUserController::class,'updatePassword'])->name('api.user.password.update');

    Route::get('/client/proposals', [App\Http\Controllers\ApiFront\ApiProposalController::class,'index'])->name('api.user.proposals');
    Route::get('/client/proposals/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'show'])->name('api.user.proposals.show');
    Route::delete('/client/proposals/delete/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'destroy'])->name('api.user.proposals.delete');
    Route::put('/client/proposals/update/{proposal}', [App\Http\Controllers\ApiFront\ApiProposalController::class,'update'])->name('api.user.proposals.update');

});


Route::prefix('front')->middleware('api')->group(function () {

    Route::get('/regions', [App\Http\Controllers\ApiFront\ApiFrontController::class,'regions'])->name('api.regions');
    Route::get('/types-jobs', [App\Http\Controllers\ApiFront\ApiFrontController::class,'jobsTypes'])->name('api.jobsTypes');

});
