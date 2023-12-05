import { Component, OnInit } from '@angular/core';
import { User } from '@avans-nx-workshop/shared/api';
import { UserService } from '../user.service';

@Component({
  selector: 'clientside-nx-workshop-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Subscribe to the observable to get the data
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
