import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Books } from '../../service/Books';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-show-all-books',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './show-all-books.component.html',
  styleUrls: ['./show-all-books.component.css']
})
export class ShowAllBooksComponent implements OnInit {

  @ViewChild(NavbarComponent) showNavBar!: NavbarComponent;
 

  constructor(private bookService: BooksService) {}
  books: Books[] = [];

  ngOnInit() {
    this.getAllBooks(); 
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      (res: any) => {
        this.books = res;
       console.log(res);
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
