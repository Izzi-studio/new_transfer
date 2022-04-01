@extends('layouts.app')
@section('content')
<section class="login paddingTop60 headerHeightMarginTop">
    <div class="container login__container">
        <div class="row">
            <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <h1 class="section-title text-start">{{ __('front.login-desc') }}</h1>
                <div class="row mt-5">
                    <form method="POST" action="{{ route('login') }}" class="col-lg-10">
                        @csrf
                        <label class="form-field">
                            <p class="form-field__label">{{ __('front.form-labels.email') }}</p>
                            <input type="email" placeholder="{{ __('front.form-labels.email') }}" required name="email" value="{{ old('email') }}">
                            @error('email')
                                <p class="mt-2">
                                    <strong class="text-danger">
                                        {{ $message }}
                                    </strong>
                                </p>
                            @enderror
                        </label>
                        <label class="form-field mt-4">
                            <p class="form-field__label">{{ __('front.form-labels.password') }}</p>
                            <input type="password" placeholder="{{ __('front.form-labels.password') }}" required name="password">
                            @error('password')
                                <p class="mt-2">
                                    <strong class="text-danger">
                                        {{ $message }}
                                    </strong>
                                </p>
                            @enderror
                        </label>
                        @if (Route::has('password.request'))
                            <p class="mt-4"><a href="{{ route('password.request') }}">{{ __('front.password-forgot') }}?</a></p>
                        @endif
                        <label class="form-checkbox mt-4">
                            <input type="checkbox" required name="remember" {{ old('remember') ? 'checked' : '' }}>
                            <div class="form-checkbox__checkbox"></div>
                            <p class="form-checkbox__label">{{ __('front.data-remember') }}</p>
                        </label>
                        <input class="mt-4" type="submit" value="{{ __('front.login') }}">
                    </form>
                </div>
            </div>
        </div>
        <div class="login__decor"><img class="login__decor-img" src="/images/decor.png" alt=""></div>
    </div>
</section>
@endsection
