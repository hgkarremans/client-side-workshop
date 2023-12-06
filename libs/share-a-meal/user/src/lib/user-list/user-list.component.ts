import { Component, OnInit } from '@angular/core';
import { User } from '@avans-nx-workshop/shared/api';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  subscription: Subscription | undefined = undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.getUsers()
      .subscribe((results) => {
        console.log(`results: ${results}`);
        
        if (results !== null) {
          this.users = results;
        } else {
          // Handle the case where results is null, if needed
        }
      });
  }
  
}
