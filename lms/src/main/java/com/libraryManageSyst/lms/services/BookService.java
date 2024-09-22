package com.libraryManageSyst.lms.services;

import aj.org.objectweb.asm.commons.TryCatchBlockSorter;
import com.libraryManageSyst.lms.entities.Book;
import com.libraryManageSyst.lms.entities.Users;
import com.libraryManageSyst.lms.repository.BookRepo;
import com.libraryManageSyst.lms.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class BookService {

    @Autowired
    BookRepo bookRepo;
    @Autowired
    UserRepo userRepo;

    public List<Book> findAll() {
        return bookRepo.findAll();
    }

    public Book saveBook(Book book) {
        try {
            bookRepo.save(book);
            return book;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ResponseEntity<Book> IssueBook(Long bookId, Long userId ) {
        Book book = bookRepo.findById(bookId).orElseThrow();
        Users user = userRepo.findById(userId).orElseThrow();
        if (book.getBookQuantity() > 0) {
            if (book.getBookQuantity() == 1) {
                book.setStatus("Not Available");
            }

            book.setBookQuantity(book.getBookQuantity() - 1);
            Set<Users> issuedToUsers = book.getIssuedTo();
            if (issuedToUsers == null) {
                issuedToUsers = new HashSet<>();
            }
            issuedToUsers.add(user);
            book.setIssuedTo(issuedToUsers);

            bookRepo.save(book);

            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
    public ResponseEntity<Book> returnBook(Long bookId, Long userId) {
        Book book = bookRepo.findById(bookId).orElseThrow();
        Users user = userRepo.findById(userId).orElseThrow();
        Set<Users> issuedToUsers = book.getIssuedTo();
        if(issuedToUsers.contains(user)) {
            book.setBookQuantity(book.getBookQuantity() + 1);
            issuedToUsers.remove(user);
            book.setIssuedTo(issuedToUsers);
            bookRepo.save(book);
            return ResponseEntity.ok(book);
        }
        else {
            return ResponseEntity.badRequest().build();
        }
    }
    public List<Book> getBookByTitle(String title) {
        try {
            return bookRepo.findByTitleContaining(title);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

}
