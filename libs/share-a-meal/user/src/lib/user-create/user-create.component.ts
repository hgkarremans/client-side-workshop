// user-create.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User, UserGender, UserRole } from '@avans-nx-workshop/shared/api';

@Component({
  selector: 'clientside-nx-workshop-user-create',
  templateUrl: './user-create.component.html',
  styles: [],
})
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
      dateOfBirth: ['', Validators.required],
      emailAdress: ['', [Validators.required, Validators.email]],
      image: [''],
      role: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  saveUser(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        ...this.userForm.value,
        id: 0, // Assigning a temporary value, assuming the backend will assign a proper ID
        friends: [],
      };

      console.log('New User:', newUser);

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
    }
  }
}
