<?php

namespace App\Models\Users;

use App\Traits\Users\RoleTrait;

class GeneralUser extends User {

    use RoleTrait;

    public static function getRoleId() {
        return 2;
    }

    /**
     * Get the class name for polymorphic relations.
     *
     * @author Ian C. Cabrera
     * @return string
     */
    public function getMorphClass() {
        return 'GeneralUser';
    }

}
