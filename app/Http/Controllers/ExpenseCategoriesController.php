<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExpenseCategoryRequest;
use App\Http\Resources\ExpenseCategoryResource;
use App\Models\ExpenseCategory;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExpenseCategoriesController extends Controller {
    
    protected $viewPath = "pages.expenses";

    public function index(Request $request) {
        try {
            $categories = ExpenseCategory::query();
            
            $categories = $request->has('paginate') && $request->paginate == false
                ? ExpenseCategoryResource::collection($categories->get())
                : $this->paginateBuilder($categories, ExpenseCategoryResource::class);

            return $this->resolve('res.fetch.success', compact("categories"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.fetch.failed');
        }
    }

    public function show(ExpenseCategory $category) {
        $category = new ExpenseCategoryResource($category);

        return $this->view('show', compact("category"));
    }

    public function store(ExpenseCategoryRequest $request, ExpenseCategory $category) {
        DB::beginTransaction();
        try {
            $category = ExpenseCategory::create($request->getFormData());
            $category = new ExpenseCategoryResource($category);

            DB::commit();
            return $this->resolve("res.expense-categories.create.success", compact("category"));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->reject($ex, "res.expense-categories.create.failed");
        }
    }

    public function update(ExpenseCategoryRequest $request, ExpenseCategory $category) {
        DB::beginTransaction();
        try {
            $category = tap($category)->update($request->getFormData());
            $category = new ExpenseCategoryResource($category);

            DB::commit();
            return $this->resolve('res.expense-categories.update.success', compact("category"));
        } catch (Exception $ex) {
            DB::rollBack();
            return $this->reject($ex, 'res.expense-categories.update.failed');
        }
    }

    public function destroy(ExpenseCategory $category) {
        try {
            if ($category->expenses()->exists()) {
                throw new Exception("Unable to delete category. Category has existing expenses.");
            }
            $category = tap($category)->delete();
            $category = new ExpenseCategoryResource($category);

            return $this->resolve('res.expense-categories.delete.success', compact("category"));
        } catch (Exception $ex) {
            return $this->reject($ex, 'res.expense-categories.delete.failed');
        }
    }

}
