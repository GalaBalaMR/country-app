<?php

use App\Http\Controllers\CountryController;
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
Route::get('/countries', function () {
    return view('welcome');
});
Route::get('/countries/add', function () {
    return view('welcome');
});

Route::get('api/countries', [CountryController::class, 'index']);
Route::post('api/countries/store', [CountryController::class, 'store']);
