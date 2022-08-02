@component('mail::message')
# Einführung

Neuer Partner, {{$user->name}} <br>
Unternehmen: {{$user->company}}<br> 
E-Mail {{$user->email}}<br> 

@component('mail::button', ['url' => 'http://70.34.197.103/info'])
Zur Website
@endcomponent  

Ihr OffertenHammer Team<br>
@endcomponent