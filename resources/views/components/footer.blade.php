<footer class="footer marginTop100">
    <div class="footer__top">
        <div class="container">
            <div class="row footer__wrap-logo">
                <div class="col-12">
                    <img src="/images/logo.png" alt="">
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-6 col-lg-auto mt-4 mt-lg-0 order-3 order-lg-1 d-flex flex-column">
                    <a class="footer__header-link" href="{{route('page.contacts.view')}}">{{ __('front.contact') }}</a>
                    <a class="footer__link footer__link_email mt-4" href="mailto:test@gmail.com">test@gmail.com</a>
                    <a class="footer__link footer__link_phone mt-4" href="tel:0443603174">044 360 31 74</a>
                </div>
                <div class="col-6 col-lg-auto mt-lg-0 order-1 order-lg-2">
                    <a class="footer__header-link" href="{{ route('staticpage.view', 'datenschutz') }}">{{ __('front.privacy') }}</a>
                </div>
                <div class="col-6 col-lg-auto mt-lg-0 order-2 order-lg-3">
                    <a class="footer__header-link" href="{{ route('staticpage.view','agb') }}">{{ __('front.conditions') }}</a>
                </div>
                <div class="col-6 col-lg-auto mt-lg-0 mt-4 order-4">
                    <a class="footer__header-link" href="{{ route('staticpage.view','impressum') }}">{{ __('front.imprint') }}</a>
                </div>
                <div class="col-6 col-lg-auto mt-lg-0 mt-4 order-4">
                    <a class="footer__header-link" href="{{ route('sitemap') }}">Sitemap</a>
                </div>
                @guest
                <div class="col-6 col-lg-auto mt-lg-0 mt-4 order-4">
                    <a class="footer__header-link" href="{{ route('partner.register.view') }}">{{ __('front.company-register') }}</a>
                </div>
                @endguest
                <div class="col-12 col-lg-auto mt-lg-0 mt-4 order-5">
                    <p class="footer__soc-title">{{ __('front.social-networks') }}</p>
                    <div class="footer__soc-wrap">
                        <a class="footer__soc-item soc-item soc-item_inst" href="#"></a>
                        <a class="footer__soc-item soc-item soc-item_fb" href="#"></a>
                        <a class="footer__soc-item soc-item soc-item_in" href="#"></a>
                    </div>
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