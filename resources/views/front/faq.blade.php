@extends('layouts.app')
@section('content')
<section class="faq paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title text-start">FAQ</h1>
        <div class="row">
            <div class="col-lg-10">
                @foreach($faqs as $faq)
                <div class="faq-block mt-4">
                    <div class="faq-block__visible">
                        <h3 class="faq-block__title">{{$faq->getFaqDescription->heading}}</h3>
                        <button class="faq-block__btn" data-hide-txt="Weniger" data-show-txt="Mehr lesen">Mehr
                            lesen</button>
                    </div>
                    <div class="faq-block__slide">
                        {!! $faq->getFaqDescription->content !!}
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        <div class="d-flex mt-4">
            <button class="btn faq__btn">Alles sehen</button>
        </div>
    </div>
</section>
<section class="form-callback paddingTop60">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <form action="#">
                    <div class="row">
                        <div class="col-md-5">
                            <label class="form-field">
                                <p class="form-field__label">E-mail</p>
                                <input type="email" placeholder="Email" required>
                            </label>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <label class="form-field">
                                <p class="form-field__label">Bemerkungen</p>
                                <textarea placeholder="Bemerkungen" required></textarea>
                            </label>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <input type="submit" value="Ausgefullt">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@stop
