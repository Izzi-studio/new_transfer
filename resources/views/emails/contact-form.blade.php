@component('mail::message')
# Einführung

{{$name}}<br>
{{$email}}<br>
{{$description}}

@component('mail::button', ['url' => 'http://70.34.197.103/info'])
Zur Website
@endcomponent  

Ihr OffertenHammer Team<br>
@endcomponent
