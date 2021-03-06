<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Users\UserResource;
use App\Models\Users\Admin;
use App\Models\Users\GeneralUser;
use App\Models\Users\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller {

    public function index(Request $request) {
        try {
            $users = $request->type == "admin"
                ? Admin::except(session("auth_user")->id)
                : GeneralUser::except(session("auth_user")->id);

            $users = $request->has('paginate') && $request->paginate == false
                ? UserResource::collection($users->get())
                : $this->paginateBuilder($users, UserResource::class);

            return $this->resolve('res.fetch.success', compact("users"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.fetch.failed');
        }
    }

    public function store(UserRequest $request, User $user) {
        DB::beginTransaction();
        try {
            $user = $request->type == "admin"
                ? Admin::create($request->getFormData())
                : GeneralUser::create($request->getFormData());

            $user = new UserResource($user);

            DB::commit();
            return $this->resolve("res.{$request->type}s.create.success", compact("user"));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->reject($ex, "res.{$request->type}s.create.failed");
        }
    }

    public function update(UserRequest $request, User $user) {
        DB::beginTransaction();
        try {
            $user = tap($user)->update($request->getFormData());
            $user = new UserResource($user);

            DB::commit();
            return $this->resolve('res.users.update.success', compact("user"));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->reject($ex, 'res.users.update.failed');
        }
    }

    public function destroy(User $user) {
        try {
            if ($user->id == session("auth_user")->id) {
                throw new Exception("User cannot delete self");
            }

            $user = tap($user)->delete();
            $user = new UserResource($user);

            return $this->resolve('res.users.delete.success', compact("user"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.users.delete.failed');
        }
    }

    public function updatePassword(UserRequest $request, User $user) {
        try {
            $user->password = $request->password;

            $user = tap($user)->save();
            $user = new UserResource($user);

            return $this->resolve("res.users.update-password.success", compact("user"));
        } catch (Exception $ex) {
            return $this->reject($ex, "res.users.update-password.failed");
        }
    }

}
