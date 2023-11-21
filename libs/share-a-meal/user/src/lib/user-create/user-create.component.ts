import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'clientside-nx-workshop-user-create',
  templateUrl: './user-create.component.html',
  styles: [],
})
export class UserCreateComponent {
  user!: User; // Add definite assignment assertion

  constructor(private route: ActivatedRoute, private userService: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId);
    });
  }
  
}
