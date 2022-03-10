<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <!-- Metas -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- <link href="#" rel="icon" type="image/jpg"> --}}

        <!-- Title -->
        <title>@yield('page_title', config('app.name'))</title>

        <!-- Styles -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" async>
        <link rel="stylesheet" href="{{ asset('dist/css/app.css') }}">
        @stack('style')
    </head>

    <body class="position-ref full-height main-content" style="background-color: #efefef!important;">
        <div id="app">
            <app inline-template>
                <div>  
                    @include('backend.pages.auth.includes.header')
                    @yield('content')
                    @include('backend.pages.auth.includes.footer')
                </div>
            </app>
        </div>
    </body>

    <!-- Scripts -->
    <script>
        window.webpack_path = "{{ config('app.base_url') }}"
        window.debug_log_enabled = "{{ config('app.debug_log_enabled') }}"
    </script>
    @routes
    <script src="{{ asset('dist/js/manifest.js') }}"></script>
    <script src="{{ asset('dist/js/vendor.js') }}"></script>
    <script src="{{ asset('dist/js/app.js') }}"></script>
    @yield('scripts')
</html>
