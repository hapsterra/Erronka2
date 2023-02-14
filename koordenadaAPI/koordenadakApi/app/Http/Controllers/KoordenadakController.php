<?php

namespace App\Http\Controllers;

use App\Models\Koordenadak;
use Illuminate\Http\Request;

class KoordenadakController extends Controller
{
    public function index(){
        return Koordenadak::all();
    }
}
