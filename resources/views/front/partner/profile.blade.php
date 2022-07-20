@extends('layouts.app')
@section('content')
<section class="profile-company paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div class="profile-company__header">
            <img class="profile-company__logo" src="{{env('FRONT_PATH_AVATAR')}}{{$user->avatar}}" alt="">
            <h1 class="profile-company__title">{{$user->company}}</h1>
        </div>
        <div class="profile-company__inner">
            <div>
                <p class="profile-company__subtitle">{{__('front.contacts')}}</p>
                <div class="row mt-4">
                    <div class="col-auto"><a class="profile-company__link profile-company__link_phone"
                            href="tel:{{$user->phone}}">{{$user->phone}}</a></div>
                    <div class="col-auto ms-md-3">
                        <a class="profile-company__link profile-company__link_email"
                            href="mailto:{{$user->email}}">{{$user->email}}</a></div>
                </div>
            </div>
            <div class="mt-4">
                <p class="profile-company__subtitle">{{__('front.type-jobs')}}</p>
                <div class="row">
                    @foreach($typesofjobs as $typeofjob)
                        @if($typeofjob->checked)
                            <div class="col-auto mt-4 me-md-3">
                                <div class="profile-company__checkbox">
                                    <div class="profile-company__checkbox-checkbox"></div>
                                    <p class="profile-company__checkbox-label">{{__('front.'.$typeofjob->name)}}</p>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
            <div class="mt-4">
                <p class="profile-company__subtitle">{{__('front.regions')}}</p>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="row">
                            @foreach($regions as $region)
                                @if($region->checked)
                                    <div class="col-lg-4 mt-4">
                                        <div class="profile-company__checkbox">
                                            <div class="profile-company__checkbox-checkbox"></div>
                                            <p class="profile-company__checkbox-label">{{__('front.'.$region->name)}}</p>
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <p class="profile-company__subtitle">{{__('front.reviews')}}</p>
                <div class="row">
                    <div class="col-lg-8">
                        @foreach($reviews as $review)
                            <div class="review mt-4">
                                @if($review->getPostedUser->avatar)
                                    <img class="review__img" src="{{env('FRONT_PATH_AVATAR')}}{{$review->getPostedUser->avatar}}" alt="">
                                @else
                                    <img class="review__img" src="/images/default-avatar.webp" alt="">
                                @endif
                                <div class="review__info">
                                    <h3 class="review__title">{{$review->getPostedUser->name}}, {{$review->created_at->format('d.m.Y')}}</h3>
                                    <div class="rating rating_fullness_{{$review->rating}} review__rating"></div>
                                    <p class="rating__txt">{{$review->message}}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                @if(isset($proposalId))
                    <div class="d-flex flex-start mt-4">
                        <a 
                            class="btn btn_width_long"
                            href="{{ route('partner.profile.create_review',[$user->profile_slug,$proposalId]) }}"
                        >
                            {{__('front.leave-comment')}}
                        </a>
                    </div>
                @endif
            </div>
        </div>
    </div>
</section>
@endsection

