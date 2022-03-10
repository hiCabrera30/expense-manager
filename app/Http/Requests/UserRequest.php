<?php

namespace App\Http\Requests;

use App\Rules\Misc\MakeColumnUnique;

class UserRequest extends RestFormRequest {

    protected function getPostRules(): Array{
        return [
            'email'    => ['required', 'email', (new MakeColumnUnique('users', 'email'))->usesSoftDelete()],
            'password' => ['required', 'min:5', 'confirmed'],
            'name'     => ['required', 'min:2'],
        ];
    }

    protected function getPostKeys(): Array{
        return ['email', 'password', 'name'];
    }

    protected function getPutRules(): Array{
        return [
            'email' => ['required', (new MakeColumnUnique('users', 'email'))->addCondition("id", "!=", $this->user->id)->usesSoftDelete()],
            'name'  => ['required', 'min:2'],
        ];
    }

    protected function getPutKeys(): Array{
        return ['email', 'name'];
    }

}
