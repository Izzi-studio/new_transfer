<header class="header">
    <div class="container header__container">
        <a class="header__logo" href="/">
            <img src="/images/logo.png">
        </a>
        <nav class="header__menu">
            <ul class="header__menu-inner">
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <li class="header__item header__item_has-menu">
                        <a class="header__link" href="#">{{ __('front.offers') }}</a>
                        <ul class="header__submenu">
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.umzug.view')}}"
                                >
                                    {{ __('front.umzug') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.reinigung.view')}}"
                                >
                                    {{ __('front.reinigung') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.umzug_und_reinigung.view')}}"
                                >
                                    {{ __('front.umzug_und_reinigung') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.malar.view')}}"
                                >
                                    {{ __('front.maler') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.bodenleger.view')}}"
                                >
                                    {{ __('front.bodenleger') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.heizung.view')}}"
                                >
                                    {{ __('front.heizung') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.elektriker.view')}}"
                                >
                                    {{ __('front.elektriker') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.gartner.view')}}"
                                >
                                    {{ __('front.gartner') }}
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.schreiner.view')}}"
                                >
                                    {{ __('front.schreiner') }}
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
                <li class="header__item header__item_has-menu">
                    <a class="header__link" href="#">{{ __('front.counselor') }}</a>
                    <ul class="header__submenu">
                        @foreach($categories as $category)
                            <li class="header__subitem">
                                <a class="header__sublink" href="{{route('blog.category.view',$category->slug)}}">{{$category->getCategoryDescription->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
                <li class="header__item header__item_has-menu">
                    <a class="header__link" href="#">{{ __('front.help') }}</a>
                    <ul class="header__submenu">
                        <li class="header__subitem">
                            <a class="header__sublink" href="{{route('page.faq.view')}}">{{ __('front.faq') }}</a>
                        </li>
                        <li class="header__subitem">
                            <a class="header__sublink" href="{{route('staticpage.view','uber_uns')}}">{{ __('front.about-us') }}</a>
                        </li>
                        <li class="header__subitem">
                            <a class="header__sublink" href="{{route('page.contacts.view')}}">{{ __('front.contact') }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="header__menu-inner">
                <li class="header__item">
                    <a class="header__link" href="{{ route('page.search.view') }}">{{ __('front.companies') }}</a>
                </li>
                @guest
                    <li class="header__item">
                        <a class="header__link" href="{{ route('login') }}">{{ __('front.login') }}</a>
                    </li>
                @else
                    @if(auth()->user()->isClient())
                        <li class="header__item">
                            <a class="header__link" href="{{ route('client.cabinet','personliche-daten/info') }}">{{auth()->user()->name}}</a>
                        </li>
                    @elseif(auth()->user()->isPartner())
                        <li class="header__item">
                            <a class="header__link" href="{{ route('partner.cabinet','personliche-daten/info') }}">{{auth()->user()->name}}</a>
                        </li>
                    @else
                        <li class="header__item">
                            <a class="header__link" href="{{ route('blog.index') }}">{{auth()->user()->name}}</a>
                        </li>
                    @endif
                        <li class="header__item">
                            <a 
                                class="header__link" 
                                href="#" 
                                onclick="event.preventDefault(); logoutForm.submit();"
                            >
                                {{ __('front.logout') }}
                            </a>
                        </li>
                        <form 
                            id="logoutForm"
                            method="POST" 
                            class="d-none" 
                            action="{{ route('logout') }}" 
                        >
                            @csrf
                        </form>
                @endguest
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