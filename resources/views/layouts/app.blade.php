<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {!! SEOMeta::generate() !!}
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body 
    @guest 
        data-is-auth="false" 
    @else 
        data-is-auth="true"
        @if(auth()->user()->isClient())
        data-user-auth="client"
        @elseif(auth()->user()->isPartner())
        data-user-auth="partner"
        @endif
    @endguest
>
    <div class="page-container">
        @include('components.header')
        <div class="page__content">
            @yield('content')
        </div>
        @include('components.footer')
        <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="1" height="1"> 
            <defs>
                <filter id="solid" x="0" y="0" width="1" height="1">
                    <feFlood result="flood" flood-color="#1072D8" />
                    <feComposite in="flood" in2="SourceAlpha" operator="atop" result="maskedflood"/>
                </filter> 
            </defs>
        </svg>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
