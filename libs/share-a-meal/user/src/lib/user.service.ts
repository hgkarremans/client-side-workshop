import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiResponse, User as IUser } from '@avans-nx-workshop/shared/api';
import { AuthService } from './auth.service';
import { environment } from '@avans-nx-workshop/shared/util-env';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private readonly apiUrl = 'http://localhost:3000/api/users';
  private readonly apiUrl = environment.apiUrl + 'users';


  constructor(private readonly http: HttpClient, private readonly authService: AuthService) {}

  getUsers(): Observable<IUser[]> {
    console.log('getUsers called');
    return this.http.get<ApiResponse<IUser[]>>(this.apiUrl).pipe(
      map(response => (response.results || []).map(result => (result as any)._fields[0].properties as IUser)),
      catchError(this.handleError)
    );
  }
  getUserById(id: string): Observable<IUser | null> {
    console.log(`getUserById called for id: ${id}`);
    return this.http.get<ApiResponse<IUser>>(`${this.apiUrl}/${id}`).pipe(
      map(response => {
        const resultArray = response.results as IUser[] || [];
        const firstResult = resultArray.length > 0 ? resultArray[0] : null;
        return firstResult ? (firstResult as any)._fields[0].properties as IUser : null;
      }),
      catchError(this.handleError)
    );
  }
  getUserFriends(userId: string, token: any): Observable<any> {
    console.log(`getUserFriends called for userId: ${userId}`);
    
    // Construct headers with Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Include headers in the HTTP request
    return this.http.get<any>(`${this.apiUrl}/${userId}/friends`, { headers }).pipe(
      tap(response => console.log('Friend list:', response.results)),
      catchError(error => {
        console.error('Error fetching user friends:', error);
        return throwError(error); // Rethrow the error to be caught by the caller
      })
    );
}

  loginUser(email: string, password: string): Observable<any> {
    const signInDto = { emailAddress: email, password: password };
    return this.http.post<any>(environment.apiUrl + 'auth/login', signInDto).pipe(
      tap(response => {
        // Assuming the login endpoint returns an object with a nested "results" property
        const accessToken = response?.results?.access_token;
        console.log('Access token:', accessToken);
        if (accessToken) {
          // Store the access token in local storage or wherever you manage tokens
          this.authService.setToken(accessToken);
          console.log('User token in login page:', this.authService.getToken());
        } else {
          // Log an error or handle the case where the access token is not present
          console.error('Access token not found in the response:', response);
        }
      }),
      catchError(this.handleError)
    );
  }
  
  
  
  addUser(newUser: IUser): Observable<IUser> {
    console.log('addUserAndLogin called');
  
  return this.http.post<IUser>(this.apiUrl, newUser).pipe(
    tap((registeredUser: IUser) => {
      console.log('User registered:', registeredUser);
      
      // After successful registration, login the user
      this.loginUser(newUser.emailAddress, newUser.passwordHash).subscribe(
        () => {
          console.log('User logged in after registration');
          // You may emit an event or perform any other action upon successful login
        },
        error => {
          console.error('Error logging in user after registration:', error);
          // Handle login errors if necessary
        }
      );
    }),
    catchError(this.handleError)
  );
    
  }

  updateUser(id: string, updatedUserData: IUser): Observable<IUser> {
    console.log(`updateUser called for id: ${id}`);
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, updatedUserData).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  deleteUser(id: string): Observable<IUser> {
    console.log(`deleteUser called for id: ${id}`);
    return this.http.delete<IUser>(`${this.apiUrl}/${id}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log('handleError in UserService', error);
    return throwError(() => new Error(error.message));
  }
}
