<h3>{{ $typeJob }}</h3>
<p>{{$date_start->format('d-m-Y - h:m')}}</p>
<p>{{$region}}</p>
<p>
    {{ implode(', ', $additional_info['work_should_be_done']) }}, {{ $additional_info['square'] ?? '' }}
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
    <p class="item-title"><span></span> Flexibel</p>
    <p class="item-txt">{{$additional_info['dayrange']}}</p>
</div>
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