@extends('pages.users.admins.layout')
<title>@yield('page_title', sprintf("%s - Admins", config('app.name')))</title>

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
            <h1 class="display-4 mb-4 mt-5">Admins</h1>
            <div class="row">
                <div class="col-sm-12">
                    @include('pages.users.admins.includes.records-table')
                </div>
            </div>
        </div>
    </div>

    
    
@endsection