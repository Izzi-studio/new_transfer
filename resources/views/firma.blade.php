@extends('layouts.app')
@section('content')

@if(Auth::user()->active)
<section class="profile paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div id="app">
            <profile-firma
                localize="{{ json_encode(__('front')) }}"
                additional-info="{{ json_encode(array(
                    'umzugUrl' => route('client.form.umzug.view'),
                    'reinigungUrl' => route('client.form.reinigung.view'),
                    'umzugUndReinigungUrl' => route('client.form.umzug_und_reinigung.view'),
                    'malarUrl' => route('client.form.malar.view'),
                    'bodenlegerUrl' => route('client.form.bodenleger.iew'),
                    'heizungUrl' => route('client.form.heizung.view'),
                    'elektrikerUrl' => route('client.form.elektriker.view'),
                    'gartnerUrl' => route('client.form.gartner.view'),
                    'schreinerUrl' => route('client.form.schreiner.view'),
                    'resellUrl' => route('partner.resell.view'),
                ))}}"
            />
        </div>
    </div>
</section>
@else
<section class="thanks headerHeightMarginTop">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-xxl-7">
                <h2 class="section-title">{{__('front.noactive')}}</h2>
            </div>
        </div>
    </div>
</section>
@endif

@endsection
