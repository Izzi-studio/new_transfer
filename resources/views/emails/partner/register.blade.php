@component('mail::message')
# Einführung

Hi, {{$user->name}}<br> 
Ihre Anmeldung {{$user->email}}<br> 
Ihr Passwort {{$password}}<br> 

@component('mail::button', ['url' => 'http://70.34.197.103/info'])
Zur Website
@endcomponent  

Ihr OffertenHammer Team<br>
@endcomponent
