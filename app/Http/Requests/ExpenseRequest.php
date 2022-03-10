<?php

namespace App\Http\Requests;

class ExpenseRequest extends RestFormRequest {

    protected function getPostRules(): Array{
        return [
            'amount'        => ['required', 'min:1', 'numeric'],
            'user_id'       => ['required'],
            'category_id' => ['required'],
        ];
    }

    protected function getPostKeys(): Array{
        return ["amount", "user_id", "category_id"];
    }

    protected function getPutRules(): Array{
        return [
            'amount'        => ['required', 'min:1', 'numeric'],
            'user_id'       => ['required'],
            'category_id' => ['required'],
        ];
    }

    protected function getPutKeys(): Array{
        return ["amount", "user_id", "category_id"];
    }

}
