<?php

namespace App\Services;

use App\Models\ExpenseCategory;
use Illuminate\Support\Facades\DB;

class ExpenseStatisticFetcher {

    public function getCategoriesOverview() {
        return ExpenseCategory::join("expenses", "expense_categories.id", "expenses.category_id")
            ->select([
                "expense_categories.id",
                "expense_categories.name",
                DB::raw("COUNT(expenses.id) as expenses_count"),
                DB::raw("SUM(expenses.amount) as expenses_sum"),
            ])
            ->groupBy("expense_categories.id")
            ->whereNull("expenses.deleted_at")
            ->get();
    }

}