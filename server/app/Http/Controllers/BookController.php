<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    private $books;

    public function __construct()
    {
        $file = file_get_contents(public_path('books.json'));
        $json = json_decode($file, true);
        $this->books = $json['books'];
    }

    public function book(int $id)
    {
        $filter_book = array_filter($this->books, function($book) use ($id) {
            $book_id = $book['id'];
            return $book_id === $id;
        });
        if (!$filter_book) {
            $response = [
                "error" => "book not found"
            ];
            return response()->json($response, 400);
        }

        return response()->json(array_values($filter_book)[0]);
    }

    public function search_book(Request $request)
    {
        $query = strtolower($request->get('q'));
        if (empty($query)) {
            $response = [
                "message" => "please search a book"
            ];
            return response()->json($response);
        }
        
        $filter_book = array_filter($this->books, function($book) use ($query) {
            $title = strtolower($book['title']);

            return str_starts_with($title, $query);
        });

        return response()->json(array_values($filter_book));
    }
}
