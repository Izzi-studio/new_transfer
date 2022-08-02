@component('mail::message')
# Einführung

Hallo {{$name}}, Vorschlag

@if($proposal->type_job_id == 1)
	UMZUG von: {{$proposal->getRegion->name}}  >  {{$proposal->additional_info['to']['region_name']}}

@endif

@if($proposal->type_job_id == 2)
	REINIGUNG
@endif

@if($proposal->type_job_id == 3)
	UMZUG+REINIGUNG
@endif

@if($proposal->type_job_id == 4)
	MALERARBEITEN 
@endif

wurde geschlossen. 

@component('mail::button', ['url' => 'http://70.34.197.103'])
Zur Website
@endcomponent

Ihr OffertenHammer Team<br>
@endcomponent
