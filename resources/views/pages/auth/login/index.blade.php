@extends('pages.auth.login.layout')
<title>@yield('page_title', sprintf("%s - Log in", config('app.name')))</title>

@push('style')
    <style>
        .remember-me-wrapper {
            position: relative;
        }
        .remember-me-text {
            position: absolute;
            top: 0;
            padding: 2px;
        }
    </style>
@endpush

@section('content')
        <div class="container-fluid">
            <div class="text-center">
                <h1 class="display-4">Expense Manager</h1>
                <p class="blockquote-footer">Submitted by Ian Cabrera</p>
            </div>
        </div>

    <div is="login-form" id="login-form" inline-template v-cloak>
        <div>
            <card class="mb-0" ref="cardPane">
                <template slot="body">
                    <form method="post" @submit.prevent="signIn">
                        <h6 class="heading-small text-muted">Log in to get started</h6>
                        <div class="row">
                            <div class="col-lg-12">
                                <form-input
                                    placeholder="Email"
                                    label="Email"
                                    v-model="form.email"
                                    ref="email"
                                ></form-input>
                            </div>
                            <div class="col-lg-12">
                                <form-input
                                    placeholder="Password"
                                    label="Password"
                                    v-model="form.password"
                                    ref="password"
                                    type="password"
                                ></form-input>
                            </div>
                        </div>
                        <div v-cloak class="row">
                            <div class="col">
                                <div class="remember-me-wrapper mb-3">
                                    <checkbox v-model="form.remember" :value="true" style="display: inline;"></checkbox>
                                    <span class="remember-me-text">Remember me</span>
                                </div>
                                <button v-if="!form.isRequesting" type="submit" class="btn btn-primary btn-rounded long float-right">
                                    <i class="fas fa-sign-in-alt mr-1"></i> Log in
                                </button>
                                <button v-else disabled class="disabled btn btn-primary btn-rounded long float-right">
                                    <i class="fas fa-spin fa-spinner mr-2"></i> Please wait
                                </button>
                            </div>
                        </div>
                    </form>
                </template>
            </card>
            <div class="diffused-shadow-child"></div>
        </div>
    </div>
@endsection