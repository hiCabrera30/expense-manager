@extends('pages.users.admins.layout')
<title>@yield('page_title', sprintf("%s - Admins", config('app.name')))</title>

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