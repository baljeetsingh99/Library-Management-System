package com.libraryManageSyst.lms.controller;

import com.libraryManageSyst.lms.entities.Book;
import com.libraryManageSyst.lms.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/books")
public class BookController {

    @Autowired
    BookService bookService;

    @GetMapping("/getall")
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {

        return ResponseEntity.ok(bookService.saveBook(book));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBook(@RequestParam String title) {
        List<Book> books = bookService.getBookByTitle(title);

        if (books != null && !books.isEmpty()) {
            return ResponseEntity.ok(books);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/issue/{bookId}/{userId}")
    public ResponseEntity<Book> issueBook(@PathVariable Long bookId, @PathVariable Long userId) {
        ResponseEntity<Book> response = bookService.IssueBook(bookId, userId);

        if (response.getStatusCode() == HttpStatus.OK) {
            return ResponseEntity.ok(response.getBody());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/return/{bookId}/{userId}")
    public ResponseEntity<Book> returnBook(@PathVariable Long bookId, @PathVariable Long userId) {
        ResponseEntity<Book> response = bookService.returnBook(bookId, userId);

        if (response.getStatusCode() == HttpStatus.OK) {
            return ResponseEntity.ok(response.getBody());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
