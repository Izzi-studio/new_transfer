<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PartnerResource extends JsonResource
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
            'name' => $this->name,
            'phone' => $this->phone,
            'lastname' => $this->lastname,
            'company' => $this->company,
            'postcode' => $this->postcode,
            'city' => $this->city,
            'house' => $this->house,
            'street' => $this->street,
            'type_jobs_partners' => $this->typesJobs,
            'regions_partners' => $this->regions,
            'avatar' => $this->avatar ? env('FRONT_PATH_AVATAR').$this->avatar : null,
        ];
    }
}
