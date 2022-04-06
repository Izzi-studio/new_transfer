@extends('layouts.app')
@section('content')

@include('front.custom_pages.include_info')

<section id="section-steps" class="steps-form paddingTop60">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="section-title text-start">Jetzt Umzugsunternehmen mit Endreinigung finden</h2>
                <p class="mt-3">Möchten Sie sogleich loslegen? Vergleichen Sie in kürzester Zeit bis zu 6 Angebote von erfahrenen Unternehmen, die sich auf Umzug und Reinigung spezialisiert haben.</p>
            </div>
        </div>
        <div class="steps-form__inner">
            <div id="app">
                <transfer-cleaning url-handler="{{ $action }}" localize="{{ json_encode(__('front')) }}" />
            </div>
        </div>
    </div>
</section>
@endsection
