import { Component, OnInit } from '@angular/core';
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
  token: any;
  email : any;
  newFriendEmail = '';

  constructor(private userService: UserService, private authService: AuthService) {
    this.token = this.authService.getToken();
    this.email = this.authService.decodeToken(this.token).username;
    console.log('Email:', this.email);
  }

  ngOnInit(): void {
    this.loadFriends();
  }

  loadFriends() {
    this.userService.getUserFriends(this.authService.decodeToken(this.token).sub, this.token).subscribe(
      (response: any) => {
        if (response?.results && response.results.length > 0) {
          this.friends = response.results.map((result: any) => result);
          console.log('Friends:', this.friends);
        } else {
          console.log('No friends found.');
        }
      },
      (error) => {
        console.error('Error fetching user friends:', error);
      }
    );
  }

  addFriend() {
    console.log('Adding friend:', this.newFriendEmail);
    this.userService.addFriend(this.email, this.newFriendEmail, this.token).subscribe(
      (response) => {
        console.log('Friend added:', response);
        this.loadFriends();
      },
      (error) => {
        console.error('Error adding friend:', error);
      }
    );
    
  }
}
