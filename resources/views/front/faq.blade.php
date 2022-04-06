@extends('layouts.app')
@section('content')
<section class="faq paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title text-start">{{ __('front.faq') }}</h1>
        <div class="row">
            <div class="col-lg-10">
                @foreach($faqs as $faq)
                <div class="faq-block mt-4">
                    <div class="faq-block__visible">
                        <h3 class="faq-block__title">{{$faq->getFaqDescription->heading}}</h3>
                        <button 
                            class="faq-block__btn" 
                            data-hide-txt="{{ __('front.fewer') }}" 
                            data-show-txt="{{ __('front.faq-read-more') }}"
                        >
                            {{ __('front.faq-read-more') }}
                        </button>
                    </div>
                    <div class="faq-block__slide">
                        {!! $faq->getFaqDescription->content !!}
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        <div class="d-flex mt-4">
            <button class="btn faq__btn">{{ __('front.show-all') }}</button>
        </div>
    </div>
</section>
<section class="form-callback paddingTop60">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <form id="form-callback" method="POST" action="{{route('api.contactForm')}}">
                    <div class="row">
                        <div class="col-lg-6 mt-4">
                            <div class="form-field">
                                <p class="form-field__label">{{ __('front.form-labels.name') }}</p>
                                <input type="text" placeholder="{{ __('front.form-labels.name') }}" required name="name">
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4">
                            <div class="form-field">
                                <p class="form-field__label">{{ __('front.form-labels.email') }}</p>
                                <input type="email" placeholder="{{ __('front.form-labels.email') }}" required name="email">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <label class="form-field">
                                <p class="form-field__label">{{ __('front.form-labels.description') }}</p>
                                <textarea placeholder="{{ __('front.form-labels.description') }}" name="description"></textarea>
                            </label>
                        </div>
                    </div>
                    <div id="success-message" style="display: none" class="alert alert-success mb-0 mt-4" role="alert">
                        Mail erfolgreich gesendet
                    </div>
                    <div class="row mt-4">
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
