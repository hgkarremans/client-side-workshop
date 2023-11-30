import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserRole, UserGender } from '@avans-nx-workshop/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
    TAG = 'Userservice';

    private users$ = new BehaviorSubject<User[]>([
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
        
    ]);
    getUsers(): User[] {
        console.log('getUsers aangeroepen');
        return this.users$.getValue();
    }
}



   