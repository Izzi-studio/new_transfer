@component('mail::message')
# Einführung

{{$name}}<br>
{{$email}}<br>
{{$description}}

@component('mail::button', ['url' => 'https://offerten-365.ch/info'])
Zur Website
@endcomponent  

Ihr Offerten 365 Team<br>
@endcomponent
