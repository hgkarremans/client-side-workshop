import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User as IUser } from '@avans-nx-workshop/shared/api';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    console.log('getUsers called');
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<IUser> {
    console.log(`getUserById called for id: ${id}`);
    return this.http.get<IUser>(`${this.apiUrl}/${id}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  addUser(newUser: IUser): Observable<IUser> {
    console.log('addUser called');
    return this.http.post<IUser>(this.apiUrl, newUser).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  updateUser(id: number, updatedUserData: IUser): Observable<IUser> {
    console.log(`updateUser called for id: ${id}`);
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, updatedUserData).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<IUser> {
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
