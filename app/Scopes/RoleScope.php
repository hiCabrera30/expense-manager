<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class RoleScope implements Scope {

    protected $id;

    public function __construct($id) {
        $this->id = $id;
    }

    public function apply(Builder $builder, Model $model) {
        $roleId = $this->id;
        $builder->join('role_user as user_roles', function ($query) use ($roleId) {
            $query->on('user_roles.user_id', '=', "users.id")
                ->where('user_roles.role_id', '=', $roleId);
        });
    }
}