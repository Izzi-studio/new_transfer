<?php

namespace App\Traits;


trait Registers
{
    /**
     * Show the application registration form.
     *
     * @return \Illuminate\View\View
     */
    public function registerPartnerView()
    {
        return view('auth.register');
    }


}
