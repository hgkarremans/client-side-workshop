import { Component, OnInit } from '@angular/core';
// import { AuthService } from '@avans-nx-workshop/backend/features';
@Component({
  selector: 'clientside-nx-workshop-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent  {
  isLoggedIn = false;

  // constructor() {}

  // ngOnInit(): void {
  //   // Check the user's login status when the component initializes
  //   // this.isLoggedIn = this.authService.isLoggedIn()// Replace with your actual method to check login status
  // }
}
