<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'gender',
        'lastname',
        'password',
        'role_id',
        'company',
        'phone',
        'availability',
        'coins',
        'profile_slug',
        'status',
        'status_pay',
        'active',
        'postcode',
        'city',
        'street',
        'house',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function isAdmin(){
        return $this->role_id == 0 ? true : false;
    }

    public function isClient(){
        return $this->role_id == 1 ? true : false;
    }

    public function isPartner(){
        return $this->role_id == 2 ? true : false;
    }

    public function regions()
    {
        return $this->hasMany('App\Models\PartnerRegions');
    }

    public function typesJobs()
    {
        return $this->hasMany('App\Models\PartnerWantJobs');
    }
}
