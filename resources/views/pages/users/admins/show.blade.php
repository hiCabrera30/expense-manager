@extends('pages.users.admins.layout')
<title>@yield('page_title', sprintf("%s - Admins", config('app.name')))</title>


@section('content')
    <div class="container">
        <div class="text-center">
            <h1 class="display-4 mb-4 mt-5">Admin</h1>
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-12">
                    <card>
                        <template slot="body">
                            <user-form :user='@json($admin)'></user-form>
                        </template>
                    </card>
                    <div class="pt-2 text-right">
                        <link-button
                            emit="users.show-change-password"
                            :params="{{ $admin->id }}"
                            class="btn btn-warning btn-rounded m-1">
                            {{ session("auth_user")->id == $admin->id ? "Change password" : "Reset password"}}
                            <i class="fa fa-lock pl-2"></i>
                        </link-button>
                    </div>
                    <change-password-form :current-user-id="{{ session("auth_user")->id }}"></change-password-form>
                </div>
            </div>
        </div>
    </div>

    
    
@endsection