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

Route::GET('/.well-known/acme-challenge/qQepKYG5ERyVcEtM94Aou_C_35OJKaMtJRcg9xx9yxQ', function () {
    return 'qQepKYG5ERyVcEtM94Aou_C_35OJKaMtJRcg9xx9yxQ.qv8W6hjsOVMv_RGdDzunBAFUyHgOah11FslvSDXdIj0';
});
