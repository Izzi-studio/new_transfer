@extends('layouts.app')
@section('content')
<section class="profile paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div id="app">
            <div class="row">
                <div class="col-lg-4 mt-4">
                    <client-sidebar />
                </div>
                <div class="col-lg-8 mt-4">
                    <router-view :key="$route.path" />
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
