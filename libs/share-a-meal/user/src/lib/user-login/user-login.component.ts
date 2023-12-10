import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse

@Component({
  selector: 'clientside-nx-workshop-user-login',
  templateUrl: './user-login.component.html',
  styles: [],
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.emailAddress;
      const password = this.loginForm.value.passwordHash;

      this.userService.loginUser(email, password).subscribe(
        () => {
          // Successful login, navigate to the desired page or perform other actions
          console.log('Login successful');
          
          console.log('User is logged in:', this.authService.isLoggedIn());
        },
        (error: HttpErrorResponse) => {
          // Handle login error, display a message, or perform other actions
          console.error('Login failed:', error);
        }
      );

      // Reset the form after handling the login
      this.loginForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
