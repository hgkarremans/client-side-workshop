import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  decodedToken: any;

  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.isLoggedInSubject.next(true);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isLoggedInSubject.next(false);
  }

  decodeToken(token: string): any {
    if (!token) {
      return null;
    }
    return jwtDecode(token)
  }

  isLoggedIn(): boolean {
    //return !!this.getToken();
    return this.decodedToken?.role === 'Admin' || this.decodedToken?.role === 'Editor';
  }

  
  
}
