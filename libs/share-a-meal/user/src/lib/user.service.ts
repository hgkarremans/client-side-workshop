import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserGender, UserRole } from '@avans-nx-workshop/shared/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      firstName: 'Eerste',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'usereen@host.com',
      role: UserRole.admin,
      gender: UserGender.female,
      image: "https://images.pexels.com/photos/8059137/pexels-photo-8059137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      firstName: 'Tweede',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'usertwee@host.com',
      role: UserRole.guest,
      gender: UserGender.female,
      image: "https://images.pexels.com/photos/4656725/pexels-photo-4656725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      firstName: 'Derde',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'userdrie@host.com',
      role: UserRole.editor,
      gender: UserGender.female,
      image: "https://images.pexels.com/photos/7047197/pexels-photo-7047197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: 3,
      firstName: 'Vierde',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'userdrie@host.com',
      role: UserRole.editor,
      gender: UserGender.male,
      image: "https://images.pexels.com/photos/7047197/pexels-photo-7047197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: 4,
      firstName: 'Vijfde',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'usereen@host.com',
      role: UserRole.admin,
      gender: UserGender.male,
      image: "https://images.pexels.com/photos/8059137/pexels-photo-8059137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      firstName: 'Zesde',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'usertwee@host.com',
      role: UserRole.guest,
      gender: UserGender.male,
      image: "https://images.pexels.com/photos/4656725/pexels-photo-4656725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      firstName: 'Zevende',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'userdrie@host.com',
      role: UserRole.editor,
      gender: UserGender.female,
      image: "https://images.pexels.com/photos/7047197/pexels-photo-7047197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      id: 7,
      firstName: 'Achste',
      lastName: 'User',
      dateOfBirth: new Date(),
      emailAdress: 'userdrie@host.com',
      role: UserRole.editor,
      gender: UserGender.other,
      image: "https://images.pexels.com/photos/7047197/pexels-photo-7047197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  constructor() {
   console.log('Service constructor aangeroepen');
  }

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }
  addUser(newUser: User): void {
    console.log('addUser aangeroepen');
    this.users.push(newUser);
  }
  getLength(): number {
    return this.users.length;
  }
  updateUser(id: number, updatedUserData: any): void {
    console.log('updateUser called');
    const index = this.users.findIndex((user) => user.id === id);
  
    if (index !== -1) {
      // Ensure 'id' is present in the updated data
      const updatedUser = { ...updatedUserData, id };
  
      this.users[index] = updatedUser;
      console.log(this.users);
    } else {
      console.log('User not found');
    }
  }
  
  
  

  getUsersAsObservable(): Observable<User[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    return of(this.users);
  }

  getUserById(id: number): User {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }
}