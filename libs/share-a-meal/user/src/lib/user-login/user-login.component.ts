import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'clientside-nx-workshop-user-login',
  templateUrl: './user-login.component.html',
  styles: [],
})
export class UserLoginComponent {
  loginForm: FormGroup;
  loginFailed = false; // Add a property to track login failure

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
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
          
          console.log('Login successful');
          console.log('User is logged in:', this.authService.isLoggedIn());
          
          this.loginForm.reset();
          this.loginFailed = false; 
          this.router.navigate(['/tickets']);
        },
        (error: HttpErrorResponse) => {
          
          console.error('Login failed:', error);
          this.loginFailed = true; 
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
