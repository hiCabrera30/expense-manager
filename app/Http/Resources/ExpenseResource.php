<?php

namespace App\Http\Resources;

use App\Http\Resources\Users\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource {

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            "id"          => $this->id,
            "user_id"     => $this->user_id,
            "category_id" => $this->category_id,
            "amount"      => $this->amount,

            "user"        => new UserResource($this->whenLoaded("user")),
            "category"    => new ExpenseCategoryResource($this->whenLoaded("category")),
        ];
    }
}
