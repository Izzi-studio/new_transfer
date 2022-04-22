

@component('mail::message')

 
Hallo, {{$name}}<br> Ihre Anfrage wurde von einem Unternehmen angenommen. Sie erhalten demnächst eine Offerte.

@component('mail::button', ['url' => 'https://offerten-365.ch'])
Zur Website
@endcomponent

Ihr Offerten 365 Team<br>
@endcomponent
