import { Component, OnInit } from '@angular/core';
//import { UserService } from 'path-to-your-user-service'; // Import your UserService
import { UserService } from '../user.service'; 
import { User } from '@avans-nx-workshop/shared/api';

@Component({
  selector: 'clientside-nx-workshop-users-friends',
  templateUrl: './users-friends.component.html',
  styleUrls: ['./users-friends.component.css'],
})
export class UsersFriendsComponent implements OnInit {
  friends: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Assuming you have a method in your UserService to fetch user's friends
    this.userService.getUserFriends().subscribe(
      (friends: User[]) => {
        this.friends = friends;
      },
      (error) => {
        console.error('Error fetching user friends:', error);
      }
    );
  }
}
