<?php

namespace Database\Seeders;

use App\Models\Users\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserRoleSeeder extends Seeder {
    
    protected function generateRole(String $name): Array{
        return [
            'name'         => Str::slug($name, '_'),
            'display_name' => $name,
        ];
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Role::insert([
            $this->generateRole('Admin'),
            $this->generateRole('GeneralCustomer'),
        ]);
    }
}
