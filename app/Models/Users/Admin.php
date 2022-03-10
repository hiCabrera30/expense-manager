<?php

namespace App\Models\Users;

use App\Models\Shops\Shop;
use App\Traits\Users\RoleTrait;

class Admin extends User {

    use RoleTrait;

    public static function getRoleId() {
        return 1;
    }
    
    /**
     * Get the class name for polymorphic relations.
     *
     * @author Ian C. Cabrera
     * @return string
     */
    public function getMorphClass() {
        return 'Admin';
    }

    public function getProfileLink() {
        return route("pages.backend.admins.show", $this->id);
    }
    
}
