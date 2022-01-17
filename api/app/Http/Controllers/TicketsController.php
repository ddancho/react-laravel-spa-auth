<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TicketsController extends Controller
{
    public function index()
    {
        return response()->json([
            'secret' => 'Hello world!'
        ], 200);
    }
}
