<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'redirects_params'=>[
        '1'=>'umzug',
        '2'=>'reinigung',
        '3'=>'umzug-und-reinigung',
        '4'=>'maler',
        '5'=>'bodenleger',
        '6'=>'heizung',
        '7'=>'elektriker',
        '8'=>'gartner',
        '9'=>'schreiner',
    ],
    'types_jobs'=>[
        '1'=>'umzug',
        '2'=>'reinigung',
        '3'=>'umzug_und_reinigung',
        '4'=>'maler',
        '5'=>'bodenleger',
        '6'=>'heizung',
        '7'=>'elektriker',
        '8'=>'gartner',
        '9'=>'schreiner',
    ]

];
