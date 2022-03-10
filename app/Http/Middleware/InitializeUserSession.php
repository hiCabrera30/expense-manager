<?php

namespace App\Http\Middleware;

use App\Models\Users\Admin;
use App\Models\Users\GeneralUser;
use App\Models\Users\User;
use Auth;
use Closure;

class InitializeUserSession {

    protected $user;

    public function __construct() {
        $this->user = auth()->user();
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        if (!$this->user || $this->isAuthenticatedUserUpdated()) {
            return $next($request);
        }

        session()->put("auth_user", $this->getUpdateData());
        session()->save();

        return $next($request);
    }

    protected function isAuthenticatedUserUpdated() {
        $authenticated_user = session("auth_user");

        return $authenticated_user &&
        $this->user->id == $authenticated_user->id &&
        $this->user->updated_at == $authenticated_user->updated_at;
    }

    /**
     * Fetches the updated active user data
     *
     * @author Ian C. Cabrera
     * @return App\Models\Users\User
     */
    protected function getUpdateData(): User {
        if ($user = Admin::find($this->user->id)) {
            return $user;

        } else if ($user = GeneralUser::find($this->user->id)) {
            return $user;
        }

        Auth::logout();
        abort(403, "User has no permission to access this page");
    }
}
