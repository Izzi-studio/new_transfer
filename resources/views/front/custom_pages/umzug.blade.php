@extends('layouts.app')
@section('content')

@include('front.custom_pages.include_info')

<section id="section-steps" class="steps-form paddingTop60">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="section-title text-start">Offerten für Umzug</h2>
                <p class="mt-3">Sparen Sie Geld und Zeit, meiden Sie unnötige Mühe! Schicken Sie jetzt in nur zwei Minuten Ihre Anfrage und Sie werden in kurzer Zeit die besten Umzugsofferten erhalten.</p>
            </div>
        </div>
        <div class="steps-form__inner">
            <div id="app">
                <transfer url-handler="{{ $action }}" localize="{{ json_encode(__('front')) }}" />
            </div>
        </div>
    </div>
</section>
@endsection
