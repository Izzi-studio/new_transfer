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
        $return = [];
        if(auth()->user()->isClient()  ||  auth()->user()->id == $this->user_id) {
            $responded = $this->getResponded()->get();

            $partnersResponded = [];
            foreach ($responded as $partner) {
                $partnersResponded[] = [
                    'id' => $partner->getPartner->id,
                    'name' => $partner->getPartner->name,
                    'status' => $partner->status,
                    'lastname' => $partner->getPartner->lastname,
                    'phone' => $partner->getPartner->phone,
                    'email' => $partner->getPartner->email,
                    'company' => $partner->getPartner->company,
                    'city' => $partner->getPartner->city,
                    'street' => $partner->getPartner->street,
                    'avatar' => $partner->getPartner->avatar ? env('FRONT_PATH_AVATAR').$partner->getPartner->avatar : null,
                    'profile_slug' => $partner->getPartner->profile_slug,
                    'star_count' => $partner->getReviewsCount(),
                    'rating_avg' => (integer)$partner->getRatingAVG(),
                ];

            }
            $return['responded_partners'] = $partnersResponded;
        }


        $return['id'] = $this->id;
        $return['type_job_id'] = $this->type_job_id;

        if(auth()->user()->isPartner()) {
            $return['price'] =  $this->price;
        }

        $return['region_from'] =  __('front.'.$this->getRegion->name);
        $return['description'] =  $this->description;
        $return['region_id'] =  $this->region_id;
        $return['performed'] =  $this->payed == 1 ? true : false;
        $return['additional_info'] =  $this->additional_info;
        $return['date_start'] =   $this->date_start->format('d-m-Y');
        $return['created_at'] =  $this->created_at->format('d-m-Y - H:i');

        $arrayViewContactsStatuses = ['accepted','resell','resell-accepted'];

        if(in_array($request->status, $arrayViewContactsStatuses)) {
            $return['client'] = [
                'name' => $this->getUser->name,
                'lastname' => $this->getUser->lastname,
                'phone' => $this->getUser->phone,
                'email' => $this->getUser->email,
                'availability' => $this->getUser->availability,
            ];
        }

        if($this->type_job_id == 1 || $this->type_job_id == 3){
            $return['region_to']  =  __('front.'.$this->additional_info['to']['region_name']);
        }

        return $return;
    }
}
