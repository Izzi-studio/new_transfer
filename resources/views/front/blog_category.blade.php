@extends('layouts.app')
@section('content')
<section class="blog paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title">{{$blogCategory->getCategoryDescription->name}}</h1>
        <div class="row">
            @foreach($blogCategory->getBlogs as $blog)
            @endforeach
            <div class="col-lg-6 mt-5">
                <div class="card-article">
                    <img class="card-article__img" src="{{env('FRONT_PATH_BLOG_IMAGE')}}{{$blog->image}}" alt="">
                    <h3 class="card-article__title">{{$blog->getBlogDescription->name}}</h3>
                    <a class="card-article__link" href="{{route('blog.post.view',[$blogCategory->slug,$blog->slug])}}">{{__('front.read-more')}}</a>
                </div>
            </div>
        </div>
        <div class="pagination mt-5 d-none"><a class="pagination__arrow pagination__arrow_prev pagination__arrow_disabled"
                href="#"></a><a class="pagination__item pagination__item_current" href="#">1</a><a
                class="pagination__item" href="#">2</a><a class="pagination__item" href="#">3</a><a
                class="pagination__arrow pagination__arrow_next" href="#"></a></div>
    </div>
</section>
@endsection
