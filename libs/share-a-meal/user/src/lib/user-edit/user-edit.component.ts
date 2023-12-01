import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User, UserGender, UserRole } from '@avans-nx-workshop/shared/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

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
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const userId = Number(params.get('id'));
          return this.userService.getUserById(userId);
        })
      )
      .subscribe((user) => {
        this.user = user;

        this.userForm.patchValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          dateOfBirth: this.user.dateOfBirth,
          emailAdress: this.user.emailAdress,
          image: this.user.image,
          gender: this.user.gender,
          role: this.user.role,
        });
      });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form is valid');
      console.log('Form values:', this.user.id, this.userForm.value);

      this.userService.updateUser(this.user.id, this.userForm.value).subscribe(() => {
        // Optionally, you can navigate back to the user details page or any other page
        this.router.navigate(['users/', this.user.id]);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
