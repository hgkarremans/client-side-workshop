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
    this.users = this.userService.getUsers();
  }

  
}