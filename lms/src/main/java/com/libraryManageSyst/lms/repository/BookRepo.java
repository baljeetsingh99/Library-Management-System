package com.libraryManageSyst.lms.repository;

import com.libraryManageSyst.lms.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepo extends JpaRepository<Book, Long> {
    List<Book> findByTitleContaining(String title);
}
