<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Model;

class RoleUser extends Model {

    protected $table = 'role_user';

    public $timestamps = false;

    /**
     * Get the class name for polymorphic relations.
     *
     * @author Ian C. Cabrera
     * @return string
     */
    public function getMorphClass() {
        return 'RoleUser';
    }
}
