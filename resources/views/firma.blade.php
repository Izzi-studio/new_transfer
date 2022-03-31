@extends('layouts.app')
@section('content')
<section class="profile paddingTop60 headerHeightMarginTop">
    <div class="container">
        <div id="app">
            <profile-firma additional-info="{{ json_encode(array(
                'umzugUrl' => route('client.form.umzug.view'),
                'reinigungUrl' => route('client.form.reinigung.view'),
                'umzugUndReinigungUrl' => route('client.form.umzug_und_reinigung.view'),
                'malarUrl' => route('client.form.malar.view'),
                'bodenlegerUrl' => route('client.form.bodenleger.view'),
                'heizungUrl' => route('client.form.heizung.view'),
                'elektrikerUrl' => route('client.form.elektriker.view'),
                'gartnerUrl' => route('client.form.gartner.view'),
                'schreinerUrl' => route('client.form.schreiner.view'),
                'resellUrl' => route('partner.resell.view'),
            ))}}"/>
        </div>
    </div>
</section>
@endsection
