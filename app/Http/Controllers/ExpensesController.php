<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExpenseRequest;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExpensesController extends Controller {
    
    protected $viewPath = "pages.expenses";

    public function index(Request $request) {
        try {
            $expenses = Expense::with("category", "user");
            if ($request->category_id) {
                $expenses->ofCategory($request->category_id);
            }
            if ($request->user_id) {
                $expenses->ofUser($request->user_id);
            }
            if (!session("auth_user")->isRole("admin")) {
                $expenses->ofUser(session("auth_user")->id);
            }

            $expenses = $this->paginateBuilder($expenses, ExpenseResource::class);

            return $this->resolve('res.fetch.success', compact("expenses"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.fetch.failed');
        }
    }

    public function home() {
        return $this->view("index");
    }

    public function store(ExpenseRequest $request, Expense $expense) {
        DB::beginTransaction();
        try {
            $expense = Expense::create($request->getFormData());
            $expense = new ExpenseResource($expense);

            DB::commit();
            return $this->resolve("res.expenses.create.success", compact("expense"));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->reject($ex, "res.expenses.create.failed");
        }
    }

    public function update(ExpenseRequest $request, Expense $expense) {
        DB::beginTransaction();
        try {
            $expense = tap($expense)->update($request->getFormData());
            $expense = new ExpenseResource($expense);

            DB::commit();
            return $this->resolve('res.expenses.update.success', compact("expense"));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->reject($ex, 'res.expenses.update.failed');
        }
    }

    public function destroy(Expense $expense) {
        try {
            $expense = tap($expense)->delete();
            $expense = new ExpenseResource($expense);

            return $this->resolve('res.expenses.delete.success', compact("expense"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.expenses.delete.failed');
        }
    }

}
