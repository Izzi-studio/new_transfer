@extends('layouts.app')
@section('content')
<section class="paddingTop60 headerHeightMarginTop">
    <div class="container">
        <h1 class="section-title text-start">{{__('front.search-results')}}</h1>
        <div id="app">
            <search-companies localize="{{ json_encode(__('front')) }}" />
        </div>
    </div>
</section>
@endsection
