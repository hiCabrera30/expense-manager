<?php

namespace App\Models\Users;

use App\Events\Users\UserWasRegistered;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {

    use HasApiTokens, HasFactory, Notifiable, LaratrustUserTrait,
        SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "users";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $dispatchesEvents = [
        'created' => UserWasRegistered::class,
    ];

    /**
     * Encrypts the password everytime the password changes
     *
     * @author Ian C. Cabrera
     * @param  mixed $value
     * @return void
     */
    public function setPasswordAttribute($value) {
        $this->attributes["password"] = bcrypt($value);
    }

    public function scopeExcept($query, $userID) {
        return $query->where("users.id", "!=", $userID);
    }
}
