import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '@avans-nx-workshop/shared/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users'; // Updated URL
  private userIdToDeleteSubject = new BehaviorSubject<number | undefined>(undefined);

  constructor(private readonly http: HttpClient) {
    console.log('UserService instantiated in frontend');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(newUser: User): Observable<User> {
    console.log('addUser called');
    return this.http.post<User>(this.apiUrl, newUser);
  }

  updateUser(id: number, updatedUserData: any): Observable<User> {
    console.log('updateUser called');
    return this.http.put<User>(`${this.apiUrl}/${id}`, updatedUserData);
  }

  deleteUser(id: number): Observable<void> {
    // Set the user ID to delete using BehaviorSubject
    this.userIdToDeleteSubject.next(id);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUserById(id: number): Observable<User> {
    console.log('getUserById called');
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getUserIdToDelete(): Observable<number | undefined> {
    return this.userIdToDeleteSubject.asObservable();
  }
}
