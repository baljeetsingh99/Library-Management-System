import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Users } from '../../service/Users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor(private userService: UsersService) {}
  @ViewChild(NavbarComponent) showNavBar!: NavbarComponent;
  users: Users[];
  errorMessage: string = ''; 

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (res: any) => {
        this.users = res;
        console.log(res);
      },
      (error) => {
        console.error('Error fetching users: ', error);
        this.errorMessage = 'Error fetching users. Please try again.'; 

      }
    )
   
  }

}
