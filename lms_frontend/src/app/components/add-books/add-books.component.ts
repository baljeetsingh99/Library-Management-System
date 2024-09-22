import { Component } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Books } from '../../service/Books';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  book: Books = new Books();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private booksService: BooksService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.booksService.addBooks(this.book).subscribe(
        (res: Books) => {
          this.successMessage = 'Book added successfully!';
          this.errorMessage = '';
          form.resetForm(); // Reset the form after successful submission
        },
        (error) => {
          this.errorMessage = 'Error adding book. Please try again.';
          this.successMessage = '';
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Form is invalid. Please check all fields.';
    }
  }
}
