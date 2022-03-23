<h3>Reinigung</h3>
<p>{{$date_start->format('d-m-Y - h:m')}}</p>
<p>{{$region}}</p>
<p>
    {{$additional_info['cleaning'] ?? '-'}}, 
    {{$additional_info['windows'] ?? '-'}} Fenster, 
    {{$additional_info['shower_wc'] ?? '-'}}, 
    {{$additional_info['bath_wc'] ?? '-'}}, 
    {{$additional_info['wc'] ?? '-'}}
</p>
<div class="item">
    <p class="item-title"><span></span> Adressen</p>
    <p class="item-txt">
        {{$additional_info['street']}} {{$additional_info['number']}}, 
        {{$additional_info['zip']}}, 
        {{$additional_info['city']}}.
    </p>
</div>
<div class="item">
    <p class="item-title"><span></span> Termine</p>
    <p class="item-txt">{{$date_start->format('d.m.Y')}}</p>
</div>
<div class="item">
    <p class="item-title"><span></span> Haus</p>
    <p class="item-txt">
        {{$additional_info['house_type']}}, 
        {{$additional_info['square']}} m2,
        {{$additional_info['rooms']}} Zimmer,
        {{$additional_info['floor']}} Stock, 
        {{$additional_info['lift']}}
    </p>
</div>
<div class="item">
    <p class="item-title"><span></span> Fenstergröße</p>
    <p class="item-txt">{{$additional_info['window_size'] ?? '-'}}</p>
</div>
<div class="item">
    <p class="item-title"><span></span> Bodentyp</p>
    <p class="item-txt">{{$additional_info['soil_type'] ?? '-'}}</p>
</div>
<div class="item">
    <p class="item-title"><span></span> Flexibel</p>
    <p class="item-txt">{{$additional_info['dayrange']}}</p>
</div>
@if(count($additional_info['other']))
<div class="item">
    <p class="item-title"><span></span> Andere Info</p>
    <p class="item-txt">{{ implode(', ', $additional_info['other']) }}</p>
</div>
@endif
<div class="item">
    <p class="item-title"><span></span> Bemerkungen</p>
    <p class="item-txt">{{$proposal->description}}</p>
</div>
<div class="item">
    <p class="item-title"><span></span> Kontaktdaten</p>
    <p class="item-txt">
        {{$client->name}} {{$client->lastname}}, 
        Telefon {{$client->phone}}, 
        {{$client->email}}
    </p>
</div>
<div class="item">
    <p class="item-title"><span></span> Erreichbarkeit</p>
    <p class="item-txt">{{$client->availability}}</p>
</div>