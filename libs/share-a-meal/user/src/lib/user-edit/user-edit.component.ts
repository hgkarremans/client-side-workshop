import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';
import { UserGender } from '@avans-nx-workshop/shared/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRole } from '@avans-nx-workshop/shared/api';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // Initialize the form with default values or empty strings
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      emailAdress: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;

          // Update the form controls with the user's values
          this.userForm.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            dateOfBirth: this.user.dateOfBirth,
            emailAdress: this.user.emailAdress,
            image: this.user.image,
            gender: this.user.gender,
            role: this.user.role,
          });
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    });
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.userForm.valid && this.user) {
      console.log('Form is valid');
      console.log('Form values:', this.user.id, this.userForm.value);
      // Assuming you have a method in your UserService to save the updated user
      this.userService.updateUser(this.user.id, this.userForm.value);

      // Optionally, you can navigate back to the user details page or any other page
      this.router.navigate(['users/', this.user.id]);
    } else {
      // Handle form validation errors or display a message to the user
      console.log('Form is invalid');
    }
  }
}
