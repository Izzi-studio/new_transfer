@component('mail::message')
# Einführung

Hi, {{$user->name}}<br>
Ihr Konto wurde gesperrt.<br>
Bitte bezahlen Sie die Rechnung. 

@component('mail::button', ['url' => 'http://70.34.197.103'])
Zur Website
@endcomponent

Ihr OffertenHammer Team<br>
@endcomponent
