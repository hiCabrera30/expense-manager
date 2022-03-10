<?php

namespace App\Models;

use App\Models\Users\GeneralUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Expense extends Model {
    use HasFactory, SoftDeletes;

    public $fillable = ["category_id", "user_id", "amount"];

    public function category() {
        return $this->belongsTo(ExpenseCategory::class, "category_id");
    }

    public function user() {
        return $this->belongsTo(GeneralUser::class, "user_id");
    }

    public function scopeOfCategory($query, $categoryId) {
        return $query->where("category_id", $categoryId);
    }

    public function scopeOfUser($query, $userId) {
        return $query->where("user_id", $userId);
    }

}
