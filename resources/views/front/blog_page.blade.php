@extends('layouts.app')
@section('content')
<section class="article paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title">{{$post->getBlogDescription->name}}</h1>
        <img class="article__img" src="{{env('FRONT_PATH_BLOG_IMAGE')}}{{$post->image}}" alt="">
        <div class="article__soc-wrap">
            <p class="article__soc-txt">Teilen:</p>
            <div class="d-flex mt-1">
                <div>
                    <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&width=145&height=20&appId" width="145" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div class="mx-1">
                    <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
                    <script type="IN/Share" data-url="https://www.linkedin.com"></script>
                </div>
            </div>
        </div>
        <div class="article__inner contentStyles">
            {!! $post->getBlogDescription->content !!}
        </div>
    </div>
</section>
@endsection
