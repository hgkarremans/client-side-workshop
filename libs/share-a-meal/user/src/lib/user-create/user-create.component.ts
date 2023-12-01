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
  user!: User;

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

    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      // Check if userId is provided and fetch user details from the service
      if (userId) {
        this.userService.getUserById(userId).subscribe((user) => {
          this.user = user;
          // Patch the user details to the form
          this.userForm.patchValue(user);
        });
      }
    });
  }

  saveUser(): void {
    if (this.userForm.valid) {
      // If the user already exists, update it; otherwise, add a new user
      if (this.user) {
        const updatedUser = {
          ...this.user,
          ...this.userForm.value,
        };
        this.userService.updateUser(updatedUser.id, updatedUser).subscribe(() => {
          console.log('User updated successfully');
        });
      } else {
        this.userService.addUser(this.userForm.value).subscribe(() => {
          console.log('User added successfully');
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
