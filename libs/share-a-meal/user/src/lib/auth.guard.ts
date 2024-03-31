import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  decodedToken: any | null = null;

  constructor(private authService: AuthService, private router: Router) {
    const token = this.authService.getToken();

    if (token) {
      this.decodedToken = this.authService.decodeToken(token);
      console.log('Decoded Token:', this.decodedToken);
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isRole(this.decodedToken)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}