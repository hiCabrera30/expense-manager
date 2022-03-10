<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Users\UserListResource;
use App\Models\Users\Admin;
use App\Models\Users\GeneralUser;
use Exception;

class GeneralUsersController extends Controller {
    
    protected $viewPath = "pages.users.users";


    public function index() {
        return $this->view("index");
    }

    public function getAll() {
        try {
            $users = GeneralUser::except(auth()->id());

            $users = $this->paginateBuilder($users, UserListResource::class);

            return $this->resolve('res.fetch.success', compact("users"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.fetch.failed');
        }
    }

}
