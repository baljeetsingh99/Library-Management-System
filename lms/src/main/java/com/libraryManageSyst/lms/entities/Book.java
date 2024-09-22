package com.libraryManageSyst.lms.entities;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String status;
    private Long bookQuantity;

    @ManyToMany
    @JoinTable(
            name = "book_user",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private Set<Users> issuedTo;

    public Book() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getBookQuantity() {
        return bookQuantity;
    }

    public void setBookQuantity(Long bookQuantity) {
        this.bookQuantity = bookQuantity;
    }

    public Set<Users> getIssuedTo() {
        return issuedTo;
    }

    public void setIssuedTo(Set<Users> issuedTo) {
        this.issuedTo = issuedTo;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", status='" + status + '\'' +
                ", bookQuantity=" + bookQuantity +
                ", issuedTo=" + issuedTo +
                '}';
    }
}
