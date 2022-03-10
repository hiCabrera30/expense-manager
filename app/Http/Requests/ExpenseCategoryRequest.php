<?php

namespace App\Http\Requests;

use App\Rules\Misc\MakeColumnUnique;

class ExpenseCategoryRequest extends RestFormRequest {

    protected function getPostRules(): Array{
        return [
            'name' => ['required', 'min:2', (new MakeColumnUnique('expense_categories', 'name'))->usesSoftDelete()],
        ];
    }

    protected function getPostKeys(): Array{
        return ['name'];
    }

    protected function getPutRules(): Array{
        return [
            'name' => ['required', 'min:2', (new MakeColumnUnique('expense_categories', 'name'))->addCondition("id", "!=", $this->id)->usesSoftDelete()],
        ];
    }

    protected function getPutKeys(): Array{
        return ['name'];
    }

}
