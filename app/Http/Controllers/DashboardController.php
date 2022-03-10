<?php

namespace App\Http\Controllers;


class DashboardController extends Controller {
    
    protected $viewPath = "pages";


    public function index() {
        return $this->view("index");
    }

}
