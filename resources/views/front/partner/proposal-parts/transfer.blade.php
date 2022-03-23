<h3>Umzug</h3>
<p>{{$date_start->format('d-m-Y - h:m')}}</p>
<p>{{$from}} > {{__('front.'.$additional_info['to']['region_name'])}}</p>
<p>
    {{$additional_info['from']['rooms']}} Zimmer, 
    {{$additional_info['from']['floor']}} Stock
</p>
<div class="item">
    <p class="item-title"><span></span> Adressen</p>
    <p class="item-txt">
        Von {{$additional_info['from']['street']}} {{$additional_info['from']['number']}}, 
        {{$additional_info['from']['zip']}}, 
        {{$additional_info['from']['city']}}.<br />
        Nach {{$additional_info['to']['street']}} {{$additional_info['to']['number']}}, 
        {{$additional_info['to']['zip']}}, 
        {{$additional_info['to']['city']}}.
    </p>
</div>
<div class="item">
    <p class="item-title"><span></span> Termine</p>
    <p class="item-txt">{{$date_start->format('d.m.Y')}}</p>
</div>
<div class="item">
    <p class="item-title"><span></span> Auszug</p>
    <p class="item-txt">
        {{$additional_info['from']['house_type']}}, 
        {{$additional_info['from']['square']}} m2, 
        {{$additional_info['from']['rooms']}} Zimmer, 
        {{$additional_info['from']['floor']}} Stock, 
        {{$additional_info['from']['lift']}}
    </p>
</div>
<div class="item">
    <p class="item-title"><span></span> Einzug</p>
    <p class="item-txt">
        {{$additional_info['to']['house_type']}}, 
        {{$additional_info['to']['square']}} m2, 
        {{$additional_info['to']['floor']}} Stock, 
        {{$additional_info['to']['lift']}}
    </p>
</div>
<div class="item">
    <p class="item-title"><span></span> Flexibel</p>
    <p class="item-txt">{{$additional_info['from']['dayrange']}}</p>
</div>
@if(count($additional_info['from']['other']))
<div class="item">
    <p class="item-title"><span></span> Andere Info</p>
    <p class="item-txt">{{ implode(', ', $additional_info['from']['other']) }}</p>
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