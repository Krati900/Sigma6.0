<?php

namespace Drupal\book_api\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Database;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class BookApiController extends ControllerBase {

  // GET all books with the pagination
  public function getBooks(Request $request) {
    
    $page = $request->query->get('page', 1); 
    $limit = $request->query->get('limit', 10); 
    
    // Ensure that page and limit are valid numbers
    $page = is_numeric($page) ? (int) $page : 1;
    $limit = is_numeric($limit) ? (int) $limit : 10;
    
    // Calculate the offset for the SQL query based on page and limit
    $offset = ($page - 1) * $limit;
  
    // Query to get the total count of books for pagination metadata
    $count_query = Database::getConnection()->select('book_data', 'b')
      ->fields('b', ['id'])
      ->countQuery()
      ->execute();
    $total_books = $count_query->fetchField();
  
    // Query to get the books for the current page
    $query = Database::getConnection()->select('book_data', 'b')
      ->fields('b')
      ->range($offset, $limit)  
      ->execute();
  
    $books = [];
    foreach ($query as $row) {
      $books[] = [
        'id' => $row->id,
        'name' => $row->name,
        'author' => $row->author,
        'genre' => $row->genre,
        'category' => $row->category,
        'publication_year' => $row->publication_year,
        'publisher' => $row->publisher,
        'rating' => $row->rating,
        'img' => $row->img,
      ];
    }
  
    // Calculate total pages for pagination
    $total_pages = ceil($total_books / $limit);
  
    // Return the books along with pagination metadata
    return new JsonResponse([
      'data' => $books,
      'pagination' => [
        'total_books' => $total_books,
        'total_pages' => $total_pages,
        'current_page' => $page,
        'limit' => $limit,
      ],
    ]);
  }
  
  // GET a single book by ID
  public function getBook($id) {
    $query = Database::getConnection()->select('book_data', 'b')
      ->fields('b')
      ->condition('id', $id)
      ->execute()
      ->fetchObject();

    if ($query) {
      return new JsonResponse([
        'id' => $query->id,
        'name' => $query->name,
        'author' => $query->author,
        'genre' => $query->genre,
        'category' => $query->category,
        'publication_year' => $query->publication_year,
        'publisher' => $query->publisher,
        'rating' => $query->rating,
        'img' => $query->img,
      ]);
    }

    return new JsonResponse(['error' => 'Book not found'], 404);
  }

  // POST to create new books (handle both single and array of books)
  public function createBook(Request $request) {
    $data = json_decode($request->getContent(), TRUE); 

    \Drupal::logger('book_api')->notice('Received data: ' . print_r($data, TRUE));

    $connection = Database::getConnection();

    if (isset($data[0])) {
      
      foreach ($data as $book) {
        $connection->insert('book_data')
          ->fields([
            'name' => $book['name'],
            'author' => $book['author'],
            'genre' => $book['genre'],
            'category' => $book['category'],
            'publication_year' => $book['publication_year'],
            'publisher' => $book['publisher'],
            'rating' => $book['rating'],
            'img' => $book['img'],
          ])
          ->execute();
      }

      return new JsonResponse(['status' => 'Books created'], 201);
    } 
    // If the data is a single book
    else {
      $connection->insert('book_data')
        ->fields([
          'name' => $data['name'],
          'author' => $data['author'],
          'genre' => $data['genre'],
          'category' => $data['category'],
          'publication_year' => $data['publication_year'],
          'publisher' => $data['publisher'],
          'rating' => $data['rating'],
          'img' => $data['img'],
        ])
        ->execute();

      return new JsonResponse(['status' => 'Book created'], 201);
    }
  }

  // PUT to update an existing book
  public function updateBook($id, Request $request) {
    $data = json_decode($request->getContent(), TRUE);
    $connection = Database::getConnection();

    $book = $connection->select('book_data', 'b')
      ->fields('b')
      ->condition('id', $id)
      ->execute()
      ->fetchObject();

    if ($book) {

      $updated = $connection->update('book_data')
        ->fields([
          'name' => $data['name'],
          'author' => $data['author'],
          'genre' => $data['genre'],
          'category' => $data['category'],
          'publication_year' => $data['publication_year'],
          'publisher' => $data['publisher'],
          'rating' => $data['rating'],
          'img' => $data['img'],
        ])
        ->condition('id', $id)
        ->execute();

      return new JsonResponse(['status' => 'Book updated']);
    }

    return new JsonResponse(['error' => 'Book not found'], 404);
  }

  // PUT to update multiple books at once
  public function updateMultipleBooks(Request $request) {
    $data = json_decode($request->getContent(), TRUE); // Decode incoming JSON to PHP array
    $connection = Database::getConnection();

    $updatedBooks = [];
    $failedBooks = [];

    foreach ($data as $bookData) {
      $book = $connection->select('book_data', 'b')
        ->fields('b')
        ->condition('id', $bookData['id'])
        ->execute()
        ->fetchObject();

      if ($book) {
        // If the book exists, update it
        $connection->update('book_data')
          ->fields([
            'name' => $bookData['name'],
            'author' => $bookData['author'],
            'genre' => $bookData['genre'],
            'category' => $bookData['category'],
            'publication_year' => $bookData['publication_year'],
            'publisher' => $bookData['publisher'],
            'rating' => $bookData['rating'],
            'img' => $bookData['img'],
          ])
          ->condition('id', $bookData['id'])
          ->execute();

        $updatedBooks[] = $bookData['id']; 
      } else {
       
        $failedBooks[] = $bookData['id'];
      }
    }

    return new JsonResponse([
      'status' => 'Books updated',
      'updated_books' => $updatedBooks,
      'failed_books' => $failedBooks,
    ]);
  }

  // DELETE a book by ID
  public function deleteBook($id) {
    $connection = Database::getConnection();

    // Check if the book exists
    $book = $connection->select('book_data', 'b')
      ->fields('b')
      ->condition('id', $id)
      ->execute()
      ->fetchObject();

    if ($book) {
      // If the book exists, delete it
      $deleted = $connection->delete('book_data')
        ->condition('id', $id)
        ->execute();

      return new JsonResponse(['status' => 'Book deleted']);
    }

    return new JsonResponse(['error' => 'Book not found'], 404);
  }
}
