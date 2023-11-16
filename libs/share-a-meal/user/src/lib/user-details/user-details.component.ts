import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';


@Component({
  selector: 'clientside-nx-workshop-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent {
  user!: User; // Add definite assignment assertion

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId);
    });
  }
}
