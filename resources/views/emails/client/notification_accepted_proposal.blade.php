

@component('mail::message')

 
Hallo, {{$name}}<br> Ihre Anfrage wurde von einem Unternehmen angenommen. Sie erhalten demnächst eine Offerte.

@component('mail::button', ['url' => 'http://70.34.197.103'])
Zur Website
@endcomponent

Ihr OffertenHammer Team<br>
@endcomponent
