@extends('layouts.app')
@section('content')
<section class="profile paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div class="profile__header">
            <h1 class="section-title">Mein Konto</h1>
            <p class="profile__bill">CHF: 00.00</p>
        </div>
        <div id="app">
            <div class="row">
                <div class="col-lg-4 mt-4">
                    <client-sidebar />
                </div>
                <div class="col-lg-8 mt-4">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
