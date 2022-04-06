<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Carbon\Carbon;

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

    //admin
    public function requestChangeInfoNew()
    {
        return $this->hasMany('App\Models\RequestCahngePartnerInfo')->whereStatus(1)->count();
    }
    public function requestChangeInfo()
    {
        return $this->hasMany('App\Models\RequestCahngePartnerInfo')->orderBy('id','desc');
    }
    /**
     * Get Matching Users
     *
     * @param int $regionId,
     * @param int $typeJobId
     * @return $query
     */
    public function scopegetPartners($query)
    {
        return $query->where('role_id',2)->
        leftJoin('request_change_partner_info','users.id','=','request_change_partner_info.user_id')->
        selectRaw('users.*, (select  count(request_change_partner_info.id) AS `count` from request_change_partner_info where request_change_partner_info.status = 1 and users.id = request_change_partner_info.user_id) AS `count`')->
        groupBy('users.id')->
        orderBy('count','DESC')->
        orderBy('id','DESC')->
        paginate(200);

    }
    public function getInvoices()
    {
        return $this->hasOne('App\Models\InvoiceToUser', 'user_id', 'id');
    }

    /**
     * Get Proposals to Partner  by status
     *
     * @param  int $status 0,1,2
     * @return $query
     */
    public function getProposalsByStatus($status){

        $startDate = Carbon::now()->format('Y/m/d');

        return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->where('proposals_to_partner.status',$status)
            ->where('date_start','>=',$startDate)
            ->orderBy('id','DESC');
    }
    //admin end
    
    /**
     * Get Proposals to Partner
     *
     * @return $query
     */
    public function getProposals(){

        return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->whereResell(0);
    }

    /**
     * Get Proposals to Partner
     *
     * @return $query
     */
    public function getNewProposals(){
        return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->whereResell(0)
            ->whereStatus('<>',0);
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
            ->whereResell(0)
            ->orderBy('id','DESC');
    }

    /**
     * Get Proposals to Client
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

    /**
     * Get Proposals to Partner
     *
     * @return $query
     */
    public function getCountProposalsCabinet(){

        $startDate = Carbon::now()->format('Y/m/d');

        $new = $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->whereStatus(0)
            ->whereResell(0)
            ->where('date_start','>=',$startDate)
            ->count();

        $accepted = $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->whereResell(0)
            ->whereStatus(1)
            ->count();

        return $new + $accepted;
    }
    /**
     * Get Proposals to Partner  by status
     *
     * @param  int $status 0,1,2
     * @return $query
     */
    public function getProposalsByStatusCabinet($status, $year = null, $month = null){
        if($year != null && $month != null){
            $datastart = Carbon::create()->startOfMonth()->month($month)->year($year)->startOfMonth()->format('Y-m-d 00:00:00');
            $dataend = Carbon::create()->endOfMonth()->month($month)->year($year)->startOfMonth()->format('Y-m-d 00:00:00');

            return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
                'user_id','id','id','proposal_id')
                ->where('proposals_to_partner.status',$status)
                ->whereResell(0)
                ->whereBetween('proposals_to_partner.created_at',[$datastart, $dataend])
                ->orderBy('id','DESC');
        }
        return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->where('proposals_to_partner.status',$status)
            ->whereResell(0)
            ->orderBy('id','DESC');
    }


    /**
     * Get Proposals to Partner  by status
     *
     * @param  int $status 0,1,2
     * @return $query
     */
    public function getResellProposalsAccept($status, $year = null, $month = null){
        if($year != null && $month != null){
            $datastart = Carbon::create()->startOfMonth()->month($month)->year($year)->startOfMonth()->format('Y-m-d 00:00:00');
            $dataend = Carbon::create()->endOfMonth()->month($month)->year($year)->startOfMonth()->format('Y-m-d 00:00:00');

            return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
                'user_id','id','id','proposal_id')
                ->where('proposals_to_partner.status',$status)
                ->whereResell(1)
                ->whereBetween('proposals_to_partner.created_at',[$datastart, $dataend])
                ->orderBy('id','DESC');
        }
        return $this->hasManyThrough('App\Models\Proposal', 'App\Models\ProposalToPartner',
            'user_id','id','id','proposal_id')
            ->where('proposals_to_partner.status',$status)
            ->whereResell(1)
            ->orderBy('id','DESC');
    }

    /**
     * Get resell Proposals Partner
     *
     * @return $query
     */
    public function getResellProposals($year = null, $month = null){
        if($year != null && $month != null){
            $datastart = Carbon::create()->startOfMonth()->month($month)->year($year)->startOfMonth()->format('Y-m-d 00:00:00');
            $dataend = Carbon::create()->endOfMonth()->month($month)->year($year)->startOfMonth()->format('Y-m-d 00:00:00');

            return $this->hasMany('App\Models\Proposal')
                ->whereResell(1)
                ->whereBetween('proposals_to_partner.created_at',[$datastart, $dataend])
                ->orderBy('id','DESC');
        }
        return $this->hasMany('App\Models\Proposal')
            ->whereResell(01)
            ->orderBy('id','DESC');
    }
    /**
     * Get Reviews

     * @return $query
     */
    public function getReviews(){
        return $this->hasOne('App\Models\Review','user_id_to','id')
            ->orderBy('id','DESC')
            ->withDefault(['*' => null]);
    }
    public function getRatingAVG(){
        return $this->hasMany('App\Models\Review','user_id_to','id')->avg('rating');
    }

    /**
     * Get Companies

     * @return $query
     */
    public function scopeCompanies(){
        return $this->whereRoleId(2);
    }
}
