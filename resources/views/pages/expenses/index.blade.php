@extends('pages.expenses.layout')
<title>@yield('page_title', sprintf("%s - Expenses", config('app.name')))</title>

@section('content')
    <div class="container-fluid">
        <div class="text-center">
            <h1 class="display-4 mb-4 mt-5">Expenses</h1>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    @include('pages.expenses.includes.category-records-table')
                </div>
                <div class="col-lg-6 col-sm-12">
                    @include('pages.expenses.includes.expenses-records-table', [
                        "user" => !session("auth_user")->isRole("admin") ? session("auth_user") : null,
                    ])
                </div>
            </div>
        </div>
    </div>
@endsection