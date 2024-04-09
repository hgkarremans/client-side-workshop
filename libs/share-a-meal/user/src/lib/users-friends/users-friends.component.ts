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
  email: any;
  newFriendEmail = '';
  errorMessage = ''; // Variable to hold the error message

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.token = this.authService.getToken();
    this.email = this.authService.decodeToken(this.token).username;
    console.log('Email:', this.email);
  }

  ngOnInit(): void {
    this.loadFriends();
  }

  loadFriends() {
    this.userService
      .getUserFriends(this.authService.decodeToken(this.token).sub, this.token)
      .subscribe(
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
  deleteFriend(friendEmail: string) {
    console.log('Deleting friend:', friendEmail);
    this.userService
      .deleteFriend(this.email, friendEmail, this.token)
      .subscribe(
        () => {
          console.log('Friend deleted successfully');
          this.loadFriends(); // Refresh the friends list after deletion
        },
        (error) => {
          console.error('Error deleting friend:', error);
        }
      );
  }

  addFriend() {
    console.log('Adding friend:', this.newFriendEmail);
    
    // Check if the new friend's email is the same as the user's email
    if (this.newFriendEmail === this.email) {
      this.errorMessage = 'Cannot add yourself as a friend.';
      return;
    }
  
    // Check if the new friend is already in the friends list
    if (this.friends.find(friend => friend.emailAddress === this.newFriendEmail)) {
      this.errorMessage = 'You are already friends with this person.';
      return;
    }
  
    // Proceed with adding the friend if the emails are different and the friend is not already in the list
    this.userService
      .addFriend(this.email, this.newFriendEmail, this.token)
      .subscribe(
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
