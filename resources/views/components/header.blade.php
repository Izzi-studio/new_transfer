<header class="header">
    <div class="container header__container">
        <a class="header__logo" href="/">
            <img src="/images/logo.png">
        </a>
        <nav class="header__menu">
            <ul class="header__menu-inner">
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <li class="header__item header__item_has-menu">
                        <a class="header__link" href="#">Offerten</a>
                        <ul class="header__submenu">
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.umzug.view')}}"
                                >
                                    Umzug
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.reinigung.view')}}"
                                >
                                    Reinigung
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.umzug_und_reinigung.view')}}"
                                >
                                    Umzug + Reinigung
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.malar.view')}}"
                                >
                                    Maler/Gipser
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.bodenleger.view')}}"
                                >
                                    Bodenleger
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.heizung.view')}}"
                                >
                                    Heizungsanbieter
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.elektriker.view')}}"
                                >
                                    Elektriker
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.gartner.view')}}"
                                >
                                    Gärtner
                                </a>
                            </li>
                            <li class="header__subitem">
                                <a 
                                    class="header__sublink" 
                                    href="{{route('client.form.schreiner.view')}}"
                                >
                                    Schreiner
                                </a>
                            </li>
                        </ul>
                    </li>
                @endif
                <li class="header__item header__item_has-menu">
                    <a class="header__link" href="#">Ratgeber</a>
                    <ul class="header__submenu">
                        @foreach($categories as $category)
                            <li class="header__subitem">
                                <a class="header__sublink" href="{{route('blog.category.view',$category->slug)}}">{{$category->getCategoryDescription->name}}</a>
                            </li>
                        @endforeach
                    </ul>
                </li>
                <li class="header__item header__item_has-menu">
                    <a class="header__link" href="#">Hilfe</a>
                    <ul class="header__submenu">
                        <li class="header__subitem">
                            <a class="header__sublink" href="{{route('page.faq.view')}}">FAQ</a>
                        </li>
                        <li class="header__subitem">
                            <a class="header__sublink" href="{{route('staticpage.view','uber_uns')}}">Über uns</a>
                        </li>
                        <li class="header__subitem">
                            <a class="header__sublink" href="{{route('page.contacts.view')}}">Kontakt</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="header__menu-inner">
                @guest
                    <li class="header__item">
                        <a class="header__link" href="{{ route('login') }}">Anmeldung</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link header__link_partner" href="{{ route('partner.register.view') }}">Partner werden</a>
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
                            <a class="header__link" href="#">{{auth()->user()->name}}</a>
                        </li>
                    @endif
                        <li class="header__item">
                            <a 
                                class="header__link" 
                                href="#" 
                                onclick="event.preventDefault(); logoutForm.submit();"
                            >
                                Ausloggen
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