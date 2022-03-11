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

    /**
     * Get Users Proposals by Type Job
     *
     * @param  int $typeJobId 1,2,3,4
     * @return $query
     */
    public function getProposalsByTypeJob($typeJobId){
        return $this->hasMany('App\Models\Proposal','user_id','id')
            ->where('type_job_id',$typeJobId)
            ->orderBy('id','DESC');
    }

    /**
     * Get Proposals to Partner
     *
     * @return $query
     */
    public function getProposalsByClient(){

        return $this->hasMany('App\Models\Proposal','user_id','id');
    }


    /**
     * Get Matching Users
     *
     * @param int $regionId
     * @param int $typeJobId
     * @return $query
     */
    public function scopeGetMatchingConditionUsers($query, $regionId, $typeJobId)
    {
        return $query->join('partner_want_jobs as pwj','pwj.user_id','users.id')
            ->join('partner_regions as pr','pr.user_id','users.id')
            ->where('pwj.type_job_id',$typeJobId)
            ->where('pr.region_id',$regionId)
            ->select('users.id as user_id','users.name','users.email','users.company');

    }

}
