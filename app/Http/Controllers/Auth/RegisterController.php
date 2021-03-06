<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

use App\Models\Proposal;
use App\Models\User;


use App\Traits\Registers;
use App\Traits\RegisterPartnerTrait;
use App\Traits\ProposalsFormTrait;
use App\Traits\RegisterClientTrait;
use App\Traits\CheckFieldTrait;
use App\Events\RegisterPartner;
use App\Events\NewProposal;
use App\Events\RegisterClient;
use Log;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */
    use RegisterClientTrait;
    use RegistersUsers;
    use Registers;
    use RegisterPartnerTrait;
    use ProposalsFormTrait;
    use CheckFieldTrait;
    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, User $user)
    {


        if ($user->isPartner() ) {
            event(new RegisterPartner($user,$this->password));
            Log::info('Registered Partner Login: '.$user->email.' PWD: '.$this->password);
            Log::info('----DONE----');
            Log::info('');

            return  response()->json(['redirect_url'=>route('partner.register.thanks.view')], 200);

        }

        if ($user->isClient() ) {
            Log::info('Registered Client Login: '.$user->email.' PWD: '.$this->password);


            $proposal = $request->only('proposal')['proposal'];
            $proposal['user_id'] = $user->id;
            $proposal['additional_info'] = $request->only('additional_info')['additional_info'];

            event(new NewProposal(Proposal::create($proposal)));
            Log::info('----DONE----');
            Log::info('');

            $arraySubjects = [
                '1'=>'Umzugsanfrage',
                '2'=>'Reinigungsanfrage',
                '3'=>'Umzugs - und Reinigungsanfrage',
                '4'=>'Maleranfrage',
                '5'=>'Bodenleger',
                '6'=>'Heizung',
                '7'=>'Elektriker',
                '8'=>'Gartner',
                '9'=>'Schreiner',
            ];



            $subject = $arraySubjects[$proposal['type_job_id']];

            event(new RegisterClient($user,$this->password,$subject));

            return  response()->json(['redirect_url'=>route('client.cabinet',config('services.redirects_params.'.$proposal['type_job_id']))], 200);

        }
    }
}
