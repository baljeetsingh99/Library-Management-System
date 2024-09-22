import { Component, ViewChild } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Books } from '../../service/Books';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search-book',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.css'
})
export class SearchBookComponent {
  @ViewChild(NavbarComponent) showNavBar!: NavbarComponent;

  searchResults: Books[] = []; 
  searchTitle: string = '';   

  constructor(private bookService: BooksService) {}

  searchBook() {
    if (this.searchTitle) {
      this.bookService.searchBook(this.searchTitle).subscribe(
        (results: Books[]) => {
          this.searchResults = results; 
        },
        (error) => {
          console.error('Error searching for books:', error);
          this.searchResults = []; 
        }
      );
    } else {
      this.searchResults = []; 
    }
  }
}
