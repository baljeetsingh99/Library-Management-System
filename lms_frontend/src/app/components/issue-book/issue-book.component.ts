import { Component, ViewChild } from '@angular/core';
import { Books } from '../../service/Books';
import { BooksService } from '../../service/books.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-issue-book',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './issue-book.component.html',
  styleUrl: './issue-book.component.css'
})
export class IssueBookComponent {

  @ViewChild(NavbarComponent) showNavBar!: NavbarComponent;

  bookId: number;
  userId: number;
  issueStatus: string;
  errorMessage: string;

  constructor(private bookService: BooksService) {}

  issueBook() {
    if (this.bookId && this.userId) {
      this.bookService.issueBook(this.bookId, this.userId).subscribe(
        (book: Books) => {
          this.issueStatus = 'Book issued successfully.';
          this.errorMessage = '';
          console.log('Book issued successfully', book);
        },
        (error) => {
          this.issueStatus = '';
          this.errorMessage = 'Error issuing book. Please try again.';
          console.error('Error issuing book', error);
        }
      );
    } else {
      this.issueStatus = '';
      this.errorMessage = 'Book ID and User ID must be provided.';
    }
  }

}
