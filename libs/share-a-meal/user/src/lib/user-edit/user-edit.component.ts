import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';
import { UserGender } from '@avans-nx-workshop/shared/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRole } from '@avans-nx-workshop/shared/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'clientside-nx-workshop-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent implements OnInit {
  user!: User;
  userForm!: FormGroup;
  genderOptions = Object.values(UserGender);
  rolesOptions = Object.values(UserRole);
  token: string | null = null; // Add this property to store the token

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService, // Inject the AuthService
    private fb: FormBuilder
  ) {
    // Initialize the form with default values or empty strings
    this.userForm = this.fb.group({
      // ... your form controls
    });
  }

  ngOnInit(): void {
    // Get the token from the AuthService
    this.token = this.authService.getToken();

    this.route.paramMap.subscribe((params) => {
      const userId = String(params.get('id'));
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user!;
          // Update the form controls with the user's values
          this.userForm.patchValue({
            // ... your form values
          });
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    });
  }

  onSubmit(): void {
    if (this.userForm.valid && this.user) {
      console.log('Form is valid');
      console.log('Form values:', this.user.Id, this.userForm.value);

      // Log the token
      console.log('Token:', this.token);

      // Assuming you have a method in your UserService to save the updated user
      this.userService.updateUser(this.user.Id, this.userForm.value).subscribe(
        () => {
          // Optionally, you can navigate back to the user details page or any other page
          this.router.navigate(['users/', this.user.Id]);
        },
        (error) => {
          // Handle the error, log it, or display a user-friendly message
          console.error('Error updating user:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
