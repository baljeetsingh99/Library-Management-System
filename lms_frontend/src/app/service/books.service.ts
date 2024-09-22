import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './Books';

const apiServerUrl = 'http://localhost:8080/api/books'; 

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get(apiServerUrl+"/getall");
  }

  searchBook(title: string): Observable<Books[]> {
    return this.http.get<Books[]>(apiServerUrl +"/search?title="+title);

  }

  returnBook(bookId: number, userId: number): Observable<Books> {
    return this.http.get<Books>(apiServerUrl + "/return/" + bookId + "/" + userId);
  }

  issueBook(bookId: number, userId: number): Observable<Books> {
    return this.http.get<Books>(apiServerUrl+"/issue/"+bookId+"/"+userId);
  }

  addBooks(book: Books): Observable<Books> {
    return this.http.post<Books>(apiServerUrl+"/add", book);
  }



}
