<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Users\UserResource;
use App\Models\Users\Admin;
use App\Models\Users\GeneralUser;
use Exception;

class GeneralUsersController extends Controller {
    
    protected $viewPath = "pages.users.users";


    public function index() {
        return $this->view("index");
    }

    public function show(GeneralUser $generalUser) {
        $user = $generalUser;

        return $this->view("show", compact("user"));
    }

}
