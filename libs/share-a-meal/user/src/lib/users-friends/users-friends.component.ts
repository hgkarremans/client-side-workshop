import { Component, OnInit } from '@angular/core';
//import { UserService } from 'path-to-your-user-service'; // Import your UserService
import { UserService } from '../user.service'; 
import { User } from '@avans-nx-workshop/shared/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'clientside-nx-workshop-users-friends',
  templateUrl: './users-friends.component.html',
  styleUrls: ['./users-friends.component.css'],
})
export class UsersFriendsComponent implements OnInit {
  friends: User[] = [];
  token : string| null;

  constructor(private userService: UserService,
    AuthService: AuthService
    ) {
      this.token = AuthService.getToken() ;

    }

  ngOnInit(): void {
    console.log(this.userService.getUserFriends);
    this.userService.getUserFriends('6651.0', this.token).subscribe(
      (friends: User[]) => {
        this.friends = friends;
      },
      (error) => {
        console.error('Error fetching user friends:', error);
      }
    );
  }
}
