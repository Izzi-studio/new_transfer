<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            //'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'lastname' => $this->lastname,
            'availability' => $this->availability,
            'avatar' => $this->avatar ? env('FRONT_PATH_AVATAR').$this->avatar : null,
        ];
    }
}
