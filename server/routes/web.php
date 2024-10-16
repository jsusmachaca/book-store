<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/books', [BookController::class, 'search_book']);
Route::get('/api/books/{id}', [BookController::class, 'book']);
