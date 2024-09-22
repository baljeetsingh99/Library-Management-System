import { Component, OnInit, ViewChild } from '@angular/core';
import { Books } from '../../service/Books';
import { BooksService } from '../../service/books.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.css'
})
export class ReturnBookComponent{

  @ViewChild(NavbarComponent) showNavBar!: NavbarComponent;
  bookId: number;
  userId: number;
  returnStatus: string;
  errorMessage: string;

  constructor(private bookService: BooksService) {}
 

  ngOnInit() {
    this.returnBook();
   }
 

  returnBook() {
    if (this.bookId && this.userId) {
      this.bookService.returnBook(this.bookId, this.userId).subscribe(
        (book: Books) => {
          console.log('Book returned successfully', book);
          this.returnStatus = 'Book returned successfully.';
          this.errorMessage = '';
          console.log('Book returned successfully', book);
        },
        (error) => {
          console.error('Error returning book', error);
          this.returnStatus = '';
          this.errorMessage = 'Error returning book. Please try again.';
          console.error('Error returning book', error);
        }
      );
    } else {
      console.error('Book ID and User ID must be provided.');
      this.returnStatus = '';
      this.errorMessage = 'Book ID and User ID must be provided.';

    }
  }

}
