<?php

namespace App\Rules\Users;

use App\Exceptions\PreciseException;
use App\Models\Users\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Validation\Rule;

class MustMatchCurrentPasswordRule implements Rule {

    protected $userId;

    /**
     * Create a new rule instance.
     *
     * @author Ian C. Cabrera
     * @return void
     */
    public function __construct(int $userId) {
        $this->userId = $userId;
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
        $userId = auth()->id();
        $user = User::findOrFail($userId);

        return $this->userId != $userId
            || Hash::check($value, $user->password);
    }

    /**
     * Get the validation error message.
     *
     * @author Ian C. Cabrera
     * @return string
     */
    public function message() {
        return 'Does not match current password';
    }
}
