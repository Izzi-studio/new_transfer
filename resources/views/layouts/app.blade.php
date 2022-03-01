<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div class="page-container">
        <header class="header">
            <div class="container header__container">
                <a class="header__logo" href="/">
                    <img src="/images/logo.png">
                </a>
                <nav class="header__menu">
                    <ul class="header__menu-inner">
                        <li class="header__item header__item_has-menu">
                            <a class="header__link" href="#">Offerten</a>
                            <ul class="header__submenu">
                                <li class="header__subitem"><a class="header__sublink" href="#">test 1</a></li>
                                <li class="header__subitem"><a class="header__sublink" href="#">test 2</a></li>
                                <li class="header__subitem"><a class="header__sublink" href="#">test 3</a></li>
                            </ul>
                        </li>
                        <li class="header__item header__item_has-menu">
                            <a class="header__link" href="#">Hilfe</a>
                            <ul class="header__submenu">
                                <li class="header__subitem"><a class="header__sublink" href="#">test 1</a></li>
                                <li class="header__subitem"><a class="header__sublink" href="#">test 2</a></li>
                                <li class="header__subitem"><a class="header__sublink" href="#">test 3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="header__menu-inner">
                        <li class="header__item"><a class="header__link" href="#">Anmeldung</a></li>
                        <li class="header__item"><a class="header__link header__link_partner" href="#">Partner
                                werden</a></li>
                    </ul>
                </nav>
                <div class="header__wrap-burger">
                    <p class="header__burger-txt">Menu</p>
                    <div class="burger header__burger">
                        <div class="burger__bar"></div>
                        <div class="burger__bar"></div>
                        <div class="burger__bar"></div>
                    </div>
                </div>
            </div>
        </header>
        <div class="page__content">
            @yield('content')
        </div>
        <footer class="footer marginTop100">
            <div class="footer__top">
                <div class="container">
                    <div class="row footer__wrap-logo">
                        <div class="col-12"><img src="/images/logo.png" alt=""></div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-6 col-lg-auto mt-4 mt-lg-0 order-3 order-lg-1 d-flex flex-column"><a
                                class="footer__header-link" href="#">Kontakt</a><a
                                class="footer__link footer__link_email mt-4" href="mailto:test@gmail.com">Kontakt</a><a
                                class="footer__link footer__link_phone mt-4" href="tel:0443603174">044 360 31 74</a>
                        </div>
                        <div class="col-6 col-lg-auto mt-lg-0 order-1 order-lg-2"><a class="footer__header-link"
                                href="#">Datenschutz</a></div>
                        <div class="col-6 col-lg-auto mt-lg-0 order-2 order-lg-3"><a class="footer__header-link"
                                href="#">AGB</a></div>
                        <div class="col-6 col-lg-auto mt-lg-0 mt-4 order-4"><a class="footer__header-link"
                                href="#">Impressum</a></div>
                        <div class="col-12 col-lg-auto mt-lg-0 mt-4 order-5">
                            <p class="footer__soc-title">Social networks</p>
                            <div class="footer__soc-wrap"><a class="footer__soc-item soc-item soc-item_inst"
                                    href="#"></a><a class="footer__soc-item soc-item soc-item_fb" href="#"></a><a
                                    class="footer__soc-item soc-item soc-item_in" href="#"></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="container">
                    <p class="footer__copy">© 2021 OfferteHummerCH</p>
                </div>
            </div>
        </footer>

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
