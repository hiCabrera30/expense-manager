<?php

namespace App\Traits\Users;

use App\Scopes\RoleScope;
use Exception;

trait RoleTrait {

    protected static function bootRoleTrait() {
        if (!method_exists(static::class, "getRoleId")) {
            throw new Exception("Static property roleID is required", 1);
        }
        static::addGlobalScope(new RoleScope(static::getRoleId()));
    }

}
