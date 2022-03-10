<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Users\UserResource;
use App\Models\Users\Admin;
use Exception;

class AdminsController extends Controller {
    
    protected $viewPath = "pages.users.admins";


    public function index() {
        return $this->view("index");
    }

    public function show(Admin $admin) {
        return $this->view("show", compact("admin"));
    }

    public function update(UserRequest $request, Admin $admin) {
        try {
            if ($admin->id == session("auth_user")->id) {
                throw new Exception("Admin cannot delete self");
            }

            $admin = tap($admin)->delete();
            $admin = new UserResource($admin);

            return $this->resolve('res.admins.delete.success', compact("admin"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.admins.delete.failed');
        }
    }

    public function destroy(Admin $admin) {
        try {
            if ($admin->id == session("auth_user")->id) {
                throw new Exception("Admin cannot delete self");
            }

            $admin = tap($admin)->delete();
            $admin = new UserResource($admin);

            return $this->resolve('res.admins.delete.success', compact("admin"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.admins.delete.failed');
        }
    }

}
