<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ProposalResource;
class ReviewsResource extends JsonResource
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
            'id' => $this->id,
            'message' =>  $this->message,
            'rating' =>  $this->rating,
            'publisher_name' =>  $this->getPostedUser->name,
            'avatar' =>  $this->getPostedUser->avatar ? env('FRONT_PATH_AVATAR').$this->getPostedUser->avatar : null,
            'created_at' =>  $this->created_at->format('Y-m-d'),
            'proposal' =>  new ProposalResource($this->getProposal()->first()),
        ];
    }
}
