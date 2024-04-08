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
  token: string | null;
  newFriendEmail = '';

  constructor(private userService: UserService, private authService: AuthService) {
    this.token = this.authService.getToken();
  }

  ngOnInit(): void {
    this.loadFriends();
  }

  loadFriends() {
    this.userService.getUserFriends('2870.0', this.token).subscribe(
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
    // Call your service method to add friend here
    console.log('Adding friend with email:', this.newFriendEmail);
    // You need to implement the logic to add a friend using the entered email
    // After adding friend, you may want to reload the friend list
    this.loadFriends();
  }
}
