import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@avans-nx-workshop/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private subscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to changes in the login status
    this.subscription = this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

  // Add a logout method
  logout(): void {
    this.authService.removeToken();
  }
}
