@extends('layouts.app')
@section('content')
<section class="paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div id="app">
            <resell-firma localize="{{ json_encode(__('front')) }}" />
        </div>
    </div>
</section>
@endsection
