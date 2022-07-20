<section class="banner headerHeightMarginTop">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                {!! $customPage->getCustomPageDescription->b1_text!!}
                <img class="banner__mobile-img" src="/images/banner-img.webp" alt="">
                <div class="d-flex mt-3">
                    <a class="btn" href="#section-steps">{{$customPage->getCustomPageDescription->b1_btn}}</a>
                </div>
            </div>
            <div class="col-lg-5">
                <img class="banner__desktop-img" src="/images/banner-img.webp" alt="">
            </div>
        </div>
    </div>
</section>
<section class="steps">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                {!! $customPage->getCustomPageDescription->b2_title!!}
            </div>
        </div>
        <div class="row steps__wrap">
            {!! $customPage->getCustomPageDescription->b2_content!!}
        </div>
    </div>
</section>
<section class="banner-txt marginTop100">
    <div class="container banner-txt__container" style="background-image: url('{{env('FRONT_PATH_CUSTOMPAGE_IMAGE').$customPage->getCustomPageDescription->b3_image}}')">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">{{$customPage->getCustomPageDescription->b3_text}}</h2>
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <div class="d-flex justify-content-center banner-txt__wrap-btn">
                        <a class="btn" href="#section-steps">{{$customPage->getCustomPageDescription->b3_btn}}</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
<section class="reviews section_bg_blue section_padding_blue">
    <div class="container">
        <h2 class="section-title">Wie es funktioniert</h2>
        <div class="swiper reviews__slider">
            <div class="swiper-wrapper">
                @foreach($reviews as $review)
                <div class="swiper-slide reviews__slide">
                    <p class="reviews__slide-date">{{$review->date}}</p>
                    <p class="reviews__slide-company">{{$review->company}}</p>
                    <p class="reviews__slide-txt">{!! $review->getReviewDescription->message !!}</p>
                    <div class="reviews__slide-wrap">
                        <div class="reviews__slide-author">{{$review->getReviewDescription->name}}</div>
                        <div class="rating rating_fullness_{{$review->rating}} reviews__slide-rating"></div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="swiper-buttons-wrapper">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</section>
<section class="advantages">
    <div class="container">
        <h2 class="section-title">{{$customPage->getCustomPageDescription->b5_title}}</h2>
        <div class="row advantages__wrap">
            {!!$customPage->getCustomPageDescription->b5_content!!}
            <div class="col-lg-6"><img class="advantages__img" src="/images/advantages-img.webp" alt=""></div>
        </div>
    </div>
</section>
<section class="banner-txt marginTop100">
    <div class="container banner-txt__container" style="background-image: url('{{env('FRONT_PATH_CUSTOMPAGE_IMAGE').$customPage->getCustomPageDescription->b6_image}}')">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">{{$customPage->getCustomPageDescription->b6_text}}</h2>
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <div class="d-flex justify-content-center banner-txt__wrap-btn">
                        <a class="btn" href="#section-steps">{{$customPage->getCustomPageDescription->b6_btn}}</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
<section class="advantages2 section_bg_blue section_padding_blue marginTop100">
    <div class="container">
        <div class="advantages2__wrap">
            {!!$customPage->getCustomPageDescription->b7_seo_text!!}
        </div>
    </div>
</section>
<section class="banner-txt marginTop100">
    <div class="container banner-txt__container" style="background-image: url('{{env('FRONT_PATH_CUSTOMPAGE_IMAGE').$customPage->getCustomPageDescription->b8_image}}')">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h2 class="section-title">{{$customPage->getCustomPageDescription->b8_text}}</h2>
                @if(!(auth()->user() && auth()->user()->isPartner()))
                    <div class="d-flex justify-content-center banner-txt__wrap-btn">
                        <a class="btn" href="#section-steps">{{$customPage->getCustomPageDescription->b8_btn}}</a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
<section class="faq section_bg_blue section_padding_blue marginTop100">
    <div class="container">
        <h2 class="section-title">FAQ </h2>
        <div>
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
        <div class="d-flex justify-content-center mt-4">
            <button class="btn faq__btn">{{ __('front.show-all') }}</button>
        </div>
    </div>
</section>