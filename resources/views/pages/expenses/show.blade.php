@extends('pages.expenses.layout')
<title>@yield('page_title', sprintf("%s - Expenses", config('app.name')))</title>

@section('content')
    <div class="container">
        <div class="text-center">
            <h1 class="display-4 mb-4 mt-5">Expenses</h1>
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-12">
                    <expense-category-form class="mb-4":category='@json($category)'></expense-category-form>
                </div>
                <div class="col-lg-6 offset-lg-3 col-sm-12">
                    @include('pages.expenses.includes.expenses-records-table', [
                        "category" => $category,
                        "user" => !session("auth_user")->isRole("admin") ? session("auth_user") : null,
                    ])
                </div>
            </div>
        </div>
    </div>
@endsection