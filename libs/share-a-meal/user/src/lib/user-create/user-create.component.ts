// user-create.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';
import { dateOfBirthValidator } from './dateOfBirthValidator';

@Component({
  selector: 'clientside-nx-workshop-user-create',
  templateUrl: './user-create.component.html',
  styles: [],
})
// user-create.component.ts
// ... (other imports and component metadata) ...

export class UserCreateComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, dateOfBirthValidator()]],
      emailAddress: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
      image: [''],
      gender: ['', Validators.required],
    });
  }

  saveUser(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        ...this.userForm.value,
        id: 0, // Assigning a temporary value, assuming the backend will assign a proper ID
      };

      console.log('Form Values:', this.userForm.value); // Log the form values

      // Add the new user to the array
      this.userService.addUser(newUser).subscribe(
        (addedUser) => {
          console.log('User added successfully:', addedUser);
          
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    } else {

      console.log('Form is invalid');
      console.log('Form Values:', this.userForm.value);
    }
  }
}

