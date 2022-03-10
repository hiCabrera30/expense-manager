@extends('pages.users.users.layout')
<title>@yield('page_title', sprintf("%s - Users", config('app.name')))</title>

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
    <div class="container">
        <div class="text-center">
            <h1 class="display-4 mb-4 mt-5">Users</h1>
            <div class="row">
                <div class="col-sm-12">
                    @include('pages.users.users.includes.records-table')
                </div>
            </div>
        </div>
    </div>

    
    
@endsection