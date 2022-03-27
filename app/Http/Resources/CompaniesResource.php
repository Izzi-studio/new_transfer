<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompaniesResource extends JsonResource
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

        return [
            'link' => route('partner.profile',$this->profile_slug),
            'company' => $this->company,
            'rating_avg' => (integer) $this->getRatingAVG(),
            'review_count' => $this->getReviews()->count(),
            'avatar' => $this->avatar ? env('FRONT_PATH_AVATAR').$this->avatar : null,
            'phone' => $this->phone,
            'email' =>  $this->email,
            'city' => $this->city,
            'street' =>  $this->street,
        ];
    }
}
