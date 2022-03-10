@extends('pages.includes.layout')
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
@endsection