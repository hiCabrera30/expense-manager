<?php

namespace App\Rules\Users;

use App\Models\Users\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Validation\Rule;

class MustBeADifferentPasswordRule implements Rule {

    protected $user;

    /**
     * Create a new rule instance.
     *
     * @author Ian C. Cabrera
     * @return void
     */
    public function __construct(int $userId) {
        $this->user = User::find($userId);
    }

    /**
     * Determine if the validation rule passes.
     *
     * @author Ian C. Cabrera
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value) {
        return $this->user && !Hash::check($value, $this->user->password);
    }

    /**
     * Get the validation error message.
     *
     * @author Ian C. Cabrera
     * @return string
     */
    public function message() {
        return 'Must be a differrent password';
    }
}
