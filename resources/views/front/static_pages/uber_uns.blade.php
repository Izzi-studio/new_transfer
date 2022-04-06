@extends('layouts.app')
@section('content')
<section class="about-us paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <h1 class="section-title text-start">{{$staticPage->getPageDescription->name}}</h1>
                <div class="about-us__inner contentStyles">
                    {!! $staticPage->getPageDescription->content !!}
                </div>
            </div>
            <div class="col-lg-7 mt-4">
                <div class="about-us__img"><img src="/images/about-us.png" alt=""></div>
            </div>
        </div>
    </div>
</section>
@endsection
