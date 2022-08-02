@component('mail::message')
# Einführung

Die Firma {{ $partner->company }} hat eine Anfrage zur Änderung ihrer Daten eingereicht.<br>

@component('mail::button', ['url' => 'http://70.34.197.103/info'])
Zur Website
@endcomponent  

Ihr OffertenHammer Team<br>
@endcomponent
