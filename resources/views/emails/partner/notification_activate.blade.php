@component('mail::message')
# Einführung

Hi, {{$user->name}}<br>
Ihre Registrierung wurde erfolgreich bestätigt!<br>
Jetzt haben Sie Zugriff auf alle Funktionen. 

@component('mail::button', ['url' => 'http://70.34.197.103'])
Zur Website
@endcomponent

Ihr OffertenHammer Team<br>
@endcomponent
