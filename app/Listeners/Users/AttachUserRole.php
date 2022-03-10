<?php

namespace App\Listeners\Users;

use App\Events\Users\UserWasRegistered;
use App\Services\Users\Auth\AttachRoleService;

class AttachUserRole {

    protected $user;

    /**
     * Handle the event.
     *
     * @param  UserWasRegistered  $event
     * @return void
     */
    public function handle(UserWasRegistered $event) {
        $this->user = new AttachRoleService($event->getUser());
        $this->user->attach();
    }

}
