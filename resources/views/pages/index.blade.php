@extends('pages.includes.layout')
<title>@yield('page_title', sprintf("%s - Log in", config('app.name')))</title>

@section('content')
    <div class="container-fluid">
        <div class="text-center">
            <h1 class="display-4">Expense Manager</h1>
            <p class="blockquote-footer">Submitted by Ian Cabrera</p>
        </div>
    </div>
    <expense-category-chart :categories='@json($categories)'></expense-category-chart>
@endsection
