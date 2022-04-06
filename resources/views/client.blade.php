@extends('layouts.app')
@section('content')
<section class="profile paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div id="app">
            <profile-client localize="{{ json_encode(__('front')) }}" />
        </div>
    </div>
</section>
@endsection
