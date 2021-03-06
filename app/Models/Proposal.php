<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class Proposal extends Model
{
    use SoftDeletes;
    protected $fillable = ['type','type_job_id','user_id','region_id','additional_info','description','date_start','resell','price','payed','hide'];
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'proposals';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'date_added','date_start'
    ];

    protected $casts = [
        'additional_info' => 'array',
    ];

    public function getAdditionalInfoAttribute($value) {

        return json_decode($value, JSON_UNESCAPED_UNICODE);

    }

    public function getUser()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    public function scopeResellNoPay()
    {
        return $this->whereResell(1)->wherePayed(0)->where('user_id','<>',auth()->user()->id);
    }


    public function scopeResell()
    {
        return $this->whereResell(1);
    }


    public function getRegion()
    {
        return $this->hasOne('App\Models\Regions', 'id', 'region_id');
    }

    public function getReviews()
    {
        return $this->hasMany('App\Models\Review', 'proposal_id', 'id');
    }

    public function getResponded()
    {
        return $this->hasMany('App\Models\ProposalToPartner', 'proposal_id', 'id')
            ->orderBy('id','DESC')
            ->whereIn('status',[1,4]);
    }
    public function getReceivedInvitation()
    {
        return $this->hasMany('App\Models\ProposalToPartner', 'proposal_id', 'id')
            ->orderBy('id','DESC');
    }


}
