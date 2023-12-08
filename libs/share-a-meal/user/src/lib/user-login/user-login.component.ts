// user-login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and Validators

@Component({
  selector: 'clientside-nx-workshop-user-login',
  templateUrl: './user-login.component.html',
  styles: [],
})
export class UserLoginComponent {
  loginForm: FormGroup; // Declare a FormGroup for the login form

  constructor(private fb: FormBuilder) {
    // Initialize the login form in the constructor
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
    });
  }

  // Function to handle login when the form is submitted
  login(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.emailAddress;
      const password = this.loginForm.value.passwordHash;

      // Add your login logic here, for example, calling a service to authenticate the user
      console.log('Email:', email);
      console.log('Password:', password);

      // Reset the form after handling the login
      this.loginForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
