<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProposalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request The request
     *
     * @return array
     */
    public function toArray($request)
    {
        $responded = $this->getResponded()->get();

        $partnersResponded = [];
        foreach($responded as $partner){
            $partnersResponded[] = [
                'name'=>$partner->getPartner->name,
                'lastname'=>$partner->getPartner->lastname,
                'phone'=>$partner->getPartner->phone,
                'email'=>$partner->getPartner->email,
                'company'=>$partner->getPartner->company,
                'city'=>$partner->getPartner->city,
                'street'=>$partner->getPartner->street,
                'star_count'=>$partner->getReviewsCount(),
                'rating_avg'=>(integer) $partner->getRatingAVG(),
            ];

        }

        $return = [];
        $return['id'] = $this->id;
        $return['responded_partners'] = $partnersResponded;
        $return['region_from'] =  __('front.'.$this->getRegion->name);
        $return['description'] =  $this->description;
        $return['region_id'] =  $this->region_id;
        $return['additional_info'] =  $this->additional_info;
        $return['date_start'] =   $this->date_start->format('d-m-Y');
        $return['created_at'] =  $this->created_at->format('d-m-Y - H:i');
        $return['client'] = [
            'name'=>$this->getUser->name,
            'lastname'=>$this->getUser->lastname,
            'phone'=>$this->getUser->phone,
            'email'=>$this->getUser->email,
            'availability'=>$this->getUser->availability,
        ];

        if($this->type_job_id == 1 || $this->type_job_id == 3){
            $return['region_to']  =  __('front.'.$this->additional_info['to']['region_name']);
        }

        return $return;
    }
}
