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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/{path?}', 'welcome');
// Route::GET('/contact', 'ContactController@index');

Route::GET('.well-known/acme-challenge/IEmUfagygvEa3TLNeeVeT95yd83CM6pxtMydp1d3Ml4', function () {
    return 'IEmUfagygvEa3TLNeeVeT95yd83CM6pxtMydp1d3Ml4.qv8W6hjsOVMv_RGdDzunBAFUyHgOah11FslvSDXdIj0';
});
