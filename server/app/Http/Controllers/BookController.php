<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    public function search_book(Request $request) {
        $query = strtolower($request->get('q'));

        if (empty($query)) {
            $response = [
                "message" => "please search a book"
            ];
            return $response;
        }

        $file = file_get_contents(public_path('books.json'));   
        $json = json_decode($file, true);
        $books = $json['books'];
        
        $filter_book = array_filter($books, function($book) use ($query) {
            $title = strtolower($book['title']);

            return $title === $query;
        });
        return response()->json(array_values($filter_book));
    }
}
