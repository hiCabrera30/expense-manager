<?php

namespace App\Http\Middleware\Laratrust;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Redirect;

class AuthenticateUserRelation {

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
    public function handle($request, Closure $next, $roles, $models = "", $modelKeys = "", $userKeys = "") {
        $userType = strtolower(session("auth_user")->user_type);
        $roles    = explode("|", $roles);
        $roleKey  = array_search($userType, $roles);

        if ($roleKey === false) {
            return $next($request);
        }

        $models    = array_filter(explode("|", $models));
        $modelKeys = array_filter(explode("|", $modelKeys));
        $userKeys  = array_filter(explode("|", $userKeys));

        foreach ($roles as $roleKey => $role) {
            if ($role != $userType) {
                continue;
            }
            $model = $request[$models[$roleKey]];

            $is_related = is_object($model) || is_array($model)
                ? $model[$modelKeys[$roleKey]] == session("auth_user")[$userKeys[$roleKey]]
                : $model == session("auth_user")[$userKeys[$roleKey]];

            if ($is_related) {
                return $next($request);
            }

        }

        return $this->unauthorized();
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
