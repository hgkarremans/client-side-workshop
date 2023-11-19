import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';
import { UserGender } from '@avans-nx-workshop/shared/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserRole } from '@avans-nx-workshop/shared/api';

@Component({
  selector: 'clientside-nx-workshop-user-create',
  templateUrl: './user-create.component.html',
  styles: [],
})
export class UserCreateComponent {
  user!: User;
  userForm!: FormGroup;
  genderOptions = Object.values(UserGender);
  rolesOptions = Object.values(UserRole);

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      gender: [''], 
      role: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId);

      // Update the 'gender' field in the form with the user's gender
      this.userForm.patchValue({
        gender: this.user.gender,
        role: this.user.role,
      });
    });
  }
}
