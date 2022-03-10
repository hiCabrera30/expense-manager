<?php

namespace App\Http\Controllers;

use App\Services\ExpenseStatisticFetcher;

class DashboardController extends Controller {

    protected $viewPath = "pages";

    public function index() {
        $fetcher    = new ExpenseStatisticFetcher;
        $categories = $fetcher->getCategoriesOverview();

        return $this->view("index", compact("categories"));
    }

}
