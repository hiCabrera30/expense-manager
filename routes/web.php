<?php

use App\Http\Controllers\Users\AdminsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExpenseCategoriesController;
use App\Http\Controllers\ExpensesController;
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
        ->middleware(["auth.role:admin"])
        ->only(["index", "show"]);

    Route::name("general-users.show")
        ->middleware(["auth.relation:generaluser,generalUser,id,id"])
        ->get('general-users/{generalUser}', [GeneralUsersController::class, 'show']);
    Route::name("general-users.index")->get('general-users/', [GeneralUsersController::class, 'index']);


    Route::name("expenses.home")
        ->get('expenses/home', [ExpensesController::class, 'home']);
    Route::name('api')
        ->resource('expenses', ExpensesController::class)
        ->only(["index", "store"]);
    Route::name('api')
        ->middleware(["auth.relation:generaluser,expense,user_id,id"])
        ->resource('expenses', ExpensesController::class)
        ->only(["update", "destroy"]);


    Route::name("categories.show")
        ->get('categories/{category}', [ExpenseCategoriesController::class, 'show']);
    Route::name("api.categories.index")
        ->get('categories', [ExpenseCategoriesController::class, 'index']);
    Route::name('api')
        ->middleware(["auth.relation:generaluser,expense,id,id"])
        ->resource('categories', ExpenseCategoriesController::class)
        ->only(["store", "update", "destroy"]);
    
        
        
    Route::name("api.users.update-password")
        ->middleware([
            "auth.role:admin|generaluser",
            "auth.relation:generaluser,generalUser,id,id",
        ])
        ->patch('users/{user}/password', [UsersController::class, 'updatePassword']);
    Route::name('api')
        ->middleware([
            "auth.role:admin|generaluser",
            "auth.relation:generaluser,generalUser,id,id",
        ])
        ->resource('users', UsersController::class)
        ->only(["index", "store", "update", "destroy"]);
    

});

