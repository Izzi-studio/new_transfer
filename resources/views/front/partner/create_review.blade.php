@extends('layouts.app')
@section('content')
<section class="reviews-company paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title text-start">{{__('front.leave-comment')}}</h1>
        <img class="reviews-company__logo" src="{{env('FRONT_PATH_AVATAR')}}{{$user->avatar}}" alt="">
        <h2 class="reviews-company__title">{{$user->company}}</h2>
        <div class="row mt-4">
            <div class="col-auto">
                <a class="profile-company__link profile-company__link_phone" href="tel:{{$user->phone}}">
                    {{$user->phone}}
                </a>
            </div>
            <div class="col-auto ms-md-3">
                <a class="profile-company__link profile-company__link_email" href="mailto:{{$user->email}}">
                    {{$user->email}}
                </a>
            </div>
        </div>
        <div class="row mt-4">
            <form class="col-lg-6" action="#">
                <div class="form-rating">
                    <input type="radio" id="star5" name="rating" value="5">
                    <label for="star5"></label>
                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4"></label>
                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3"></label>
                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2"></label>
                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1"></label>
                </div>
                <div class="form-field mt-4">
                    <p class="form-field__label">{{__('front.reviews')}}*</p>
                    <textarea placeholder="{{__('front.reviews')}}"></textarea>
                </div>
                <input class="btn btn_width_long mt-4" type="submit" value="{{__('front.send')}}">
            </form>
        </div> 
    </div> 
</section>
@endsection