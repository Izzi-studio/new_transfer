@extends('layouts.app')
@section('content')
<section class="login paddingTop60 headerHeightMarginTop">
    <div class="container login__container">
        <div class="row">
            <div class="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <h1 class="section-title text-start">{{ __('front.password-forgot') }}</h1>
                <p class="mt-3">{{ __('front.password-forgot-desc') }}</p>

                @if (session('status'))
                    <div class="alert alert-success mb-0 mt-4" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <div class="row mt-4">
                    <form class="col-lg-10" method="POST" action="{{ route('password.email') }}">
                        @csrf
                        <label class="form-field">
                            <p class="form-field__label">{{ __('front.form-labels.email') }}</p>
                            <input type="email" placeholder="{{ __('front.form-labels.email') }}" name="email" value="{{ old('email') }}" required>
                            @error('email')
                                <p class="mt-2">
                                    <strong class="text-danger">
                                        {{ $message }}
                                    </strong>
                                </p>
                            @enderror
                        </label>
                        <input class="mt-4" type="submit" value="{{ __('front.send') }}">
                    </form>
                </div>
            </div>
        </div>
        <div class="login__decor"><img class="login__decor-img" src="/images/decor.webp" alt=""></div>
    </div>
</section>
@endsection
