@component('mail::message')
# Einführung

Hi, {{$user->name}}<br>
Vielen Dank für Ihre Registrierung!<br>
Sobald der Administrator Ihre Registrierung bestätigt hat, können Sie auf alle Funktionen zugreifen. 

@component('mail::button', ['url' => 'http://70.34.197.103'])
Zur Website
@endcomponent

Ihr OffertenHammer Team<br>
@endcomponent