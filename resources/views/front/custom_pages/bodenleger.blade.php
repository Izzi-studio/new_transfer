@extends('layouts.app')
@section('content')

@include('front.custom_pages.include_info')

<section id="section-steps" class="steps-form paddingTop60">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="section-title text-start">Bodenleger kostenlos anfragen</h2>
                <p class="mt-3">Beschreiben Sie Ihr Projekt und wir vermitteln Ihnen bis zu drei Maler/Gipser für eine unverbindliche Beratung und Offertstellung</p>
            </div>
        </div>
        <div class="steps-form__inner">
            <div id="app">
                <floorer url-handler="{{ $action }}" localize="{{ json_encode(__('front')) }}" />
            </div>
        </div>
    </div>
</section>
@endsection
