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
    Route::get('/regions', [App\Http\Controllers\ApiFront\ApiFrontController::class,'regions'])->name('api.regions');
});


Route::prefix('front')->middleware('api')->group(function () {

 //   Route::get('/regions', [App\Http\Controllers\ApiFront\ApiFrontController::class,'regions'])->name('api.regions');
    Route::get('/types-jobs', [App\Http\Controllers\ApiFront\ApiFrontController::class,'jobsTypes'])->name('api.jobsTypes');

});
