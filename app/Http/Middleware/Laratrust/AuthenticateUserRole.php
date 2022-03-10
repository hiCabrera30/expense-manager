<?php

namespace App\Http\Middleware\Laratrust;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Redirect;

class AuthenticateUserRole {

    /**
     * Handle incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Closure $next
     * @param  string  $permissions
     * @param  string|null  $team
     * @param  string|null  $options
     * @return mixed
     */
    public function handle($request, Closure $next, $roles, $options = '') {
        $userType = strtolower(session("auth_user")->user_type);
        $roles = explode("|", $roles);

        return in_array($userType, $roles) ? $next($request) : $this->unauthorized();
    }

    protected function unauthorized() {
        $handling = config('laratrust.middleware.handling');
        $handler  = config("laratrust.middleware.handlers.{$handling}");

        if ($handling == 'abort') {
            return App::abort($handler['code']);
        }

        $redirect = Redirect::to($handler['url']);
        if (!empty($handler['message']['content'])) {
            $redirect->with($handler['message']['key'], $handler['message']['content']);
        }

        return $redirect;
    }
}
