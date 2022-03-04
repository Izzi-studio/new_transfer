@extends('layouts.app')
@section('content')
<section class="login paddingTop60 headerHeightMarginTop">
    <div class="container login__container">
        <div class="row">
            <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <h1 class="section-title text-start">Loggen Sie Sich Ein</h1>
                <div class="row mt-5">
                    <form method="POST" action="{{ route('login') }}" class="col-lg-10">
                        @csrf
                        <label class="form-field">
                            <p class="form-field__label">E-mail</p>
                            <input type="email" placeholder="E-Mail" required name="email" value="{{ old('email') }}">
                            @error('email')
                                <p class="mt-2">
                                    <strong class="text-danger">
                                        {{ $message }}
                                    </strong>
                                </p>
                            @enderror
                        </label>
                        <label class="form-field mt-4">
                            <p class="form-field__label">Passwort</p>
                            <input type="password" placeholder="Passwort" required name="password">
                            @error('password')
                                <p class="mt-2">
                                    <strong class="text-danger">
                                        {{ $message }}
                                    </strong>
                                </p>
                            @enderror
                        </label>
                        @if (Route::has('password.request'))
                            <p class="mt-4"><a href="{{ route('password.request') }}">Passwort Vergessen?</a></p>
                        @endif
                        <label class="form-checkbox mt-4">
                            <input type="checkbox" required name="remember" {{ old('remember') ? 'checked' : '' }}>
                            <div class="form-checkbox__checkbox"></div>
                            <p class="form-checkbox__label">Daten Merken</p>
                        </label>
                        <input class="mt-4" type="submit" value="Einloggen">
                        <p class="mt-4">Oder <a href="{{ route('partner.register.view') }}">registrieren</a></p>
                    </form>
                </div>
            </div>
        </div>
        <div class="login__decor"><img class="login__decor-img" src="/images/decor.png" alt=""></div>
    </div>
</section>
@endsection
