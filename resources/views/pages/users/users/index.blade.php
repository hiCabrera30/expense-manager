@extends('pages.users.users.layout')
<title>@yield('page_title', sprintf("%s - Users", config('app.name')))</title>

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