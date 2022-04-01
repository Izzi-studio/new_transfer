@extends('layouts.app')
@section('content')
<section class="contact paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <h2 class="section-title text-start">{{ __('front.contact') }}</h2>
                <div class="contact__info">
                    <h3>{{ __('front.address') }}</h3>
                    <ul>
                        <li>Badenerstrasse 549</li>
                        <li>8048 Zürich</li>
                        <li>Schweiz</li>
                        <li>E-Mail: <a href="mailto:info@OfferteHummer.ch">info@OfferteHummer.ch</a></li>
                    </ul>
                </div>
                <form action="#">
                    <div class="row">
                        <div class="col-lg-6 mt-4">
                            <div class="form-field">
                                <p class="form-field__label">{{ __('front.form-labels.name') }}</p>
                                <input type="text" placeholder="{{ __('front.form-labels.name') }}">
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4">
                            <div class="form-field">
                                <p class="form-field__label">{{ __('front.form-labels.email') }}</p>
                                <input type="email" placeholder="{{ __('front.form-labels.email') }}" required>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <div class="form-field">
                                <p class="form-field__label">{{ __('front.form-labels.description') }}</p>
                                <textarea placeholder="{{ __('front.form-labels.description') }}"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12">
                            <input type="submit" value="{{ __('front.send') }}">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@stop
