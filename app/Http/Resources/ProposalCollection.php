<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProposalCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request Request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => ProposalResource::collection($this),
            'meta' => [
                'count' => $this->collection->count(),
            ],
        ];
    }
}
