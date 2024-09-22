import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users';

const apiServerUrl = 'http://localhost:8080/api/users'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    // Use template literals for cleaner string formatting
    return this.http.get(apiServerUrl+"/getall");
  }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(apiServerUrl+"/add", user);
  } 
}
