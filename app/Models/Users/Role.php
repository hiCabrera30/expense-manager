<?php

namespace App\Models\Users;

use Laratrust\Models\LaratrustRole;

class Role extends LaratrustRole {

    /**
     * Get the class name for polymorphic relations.
     *
     * @author Ian C. Cabrera
     * @return string
     */
    public function getMorphClass() {
        return 'Role';
    }
}
