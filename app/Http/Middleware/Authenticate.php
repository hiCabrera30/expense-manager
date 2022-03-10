<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware {

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function redirectTo($request) {
        if (!$request->expectsJson()) {
            return route('auth.login', $this->prepareParameters(request()));
        }
    }

    protected function prepareParameters($request) {
        $fromHome = $request->route()->getName() === 'dashboard.index'
            && strtolower($request->getMethod()) === 'get';

        return !$fromHome
            ? ['rn' => $request->route()->getName(), 'rp' => $request->route()->parameters]
            : [];
    }
}
