import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Users } from '../../service/Users';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent], // Include CommonModule here
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {

  @ViewChild(NavbarComponent) showNavBar!: NavbarComponent;
  user: Users = new Users();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UsersService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(this.user).subscribe(
        (res: Users) => {
          this.successMessage = 'User added successfully!';
          this.errorMessage = '';
          form.resetForm(); // Reset the form after successful submission
        },
        (error) => {
          this.errorMessage = 'Error adding user. Please try again.';
          this.successMessage = '';
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Form is invalid. Please check all fields.';
    }
  }
}
