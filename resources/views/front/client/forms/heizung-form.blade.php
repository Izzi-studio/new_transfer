@extends('layouts.app')
@section('content')
<section class="steps-form paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="section-title text-start">Heizungsanbieter kostenlos anfragen</h2>
                <p class="mt-3">Füllen Sie unseren Fragebogen aus und wir vermitteln Ihnen bis zu drei Heizungsanbieter für eine unverbindliche Beratung und Offertstellung</p>
            </div>
        </div>
        <div class="steps-form__inner">
            <div id="app">
                <heating url-handler="{{ $action }}" localize="{{ json_encode(__('front')) }}" />
            </div>
        </div>
    </div>
</section>
@endsection
