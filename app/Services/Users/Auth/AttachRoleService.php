<?php

namespace App\Services\Users\Auth;

use App\Models\Users\User;
use Exception;

class AttachRoleService {

    public function __construct(User $user) {
        $this->user = $user;
    }
    
    public function attach() {
        if (!method_exists($this->user, "getRoleId")) {
            throw new Exception("getRoleId must be declared in a roled user class");
        }
        
        $this->user->attachRole($this->user::getRoleId());
    }

}