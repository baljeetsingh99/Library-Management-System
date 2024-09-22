import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BooksService } from '../../service/books.service';
import { Books } from '../../service/Books';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent {
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


