<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseCategoryResource extends JsonResource {

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            "id"       => $this->id,
            "name"     => $this->name,
            "expenses" => ExpenseResource::collection($this->whenLoaded("expenses")),
        ];
    }
}