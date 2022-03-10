<?php

use App\Http\Controllers\Users\AdminsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Users\GeneralUsersController;
use App\Http\Controllers\Users\UsersController;
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

Route::group(["middleware" => ["guest"]], function () {

    Route::name("auth.login")->get('/login', [LoginController::class, 'index']);

    Route::name("api.auth.login")->post('/login', [LoginController::class, 'login']);

});

Route::group(["middleware" => ["auth"]], function () {

    Route::name("auth.logout")->get('/logout', [LoginController::class, 'logout']);

    Route::name("dashboard.index")->get('/', [DashboardController::class, 'index']);



    Route::resource('admins', AdminsController::class)
        ->only(["index"]);

    Route::resource('general-users', GeneralUsersController::class)
        ->only(["index"]);
    
        Route::name('api')
            ->resource('users', UsersController::class)
            ->only(["index", "store", "update", "destroy"]);
    

});

