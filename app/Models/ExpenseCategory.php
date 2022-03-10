<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExpenseCategory extends Model {
    use HasFactory, SoftDeletes;

    public $fillable = ["name"];

    public function expenses() {
        return $this->hasMany(Expense::class, "category_id");
    }


}
