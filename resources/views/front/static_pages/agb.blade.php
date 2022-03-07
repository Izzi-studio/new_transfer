@extends('layouts.app')
@section('content')
    <section class="paddingTop60 headerHeightMarginTop">
        <div class="container">
            <h1 class="section-title text-start">{{$staticPage->getPageDescription->name}}</h1>
            <div class="mt-4 contentStyles">
                {!! $staticPage->getPageDescription->content !!}
            </div>
        </div>
    </section>
@stop
