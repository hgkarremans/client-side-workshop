import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '@avans-nx-workshop/shared/api';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'clientside-nx-workshop-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null; // Use User or null

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = String(params.get('id'));
      console.log('userId', userId);
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    });
  }

  openDeleteConfirmationModal() {
    this.userService.deleteUser(this.user!.Id).subscribe(
      (user) => {
        console.log('User deleted:', user);
        this.user = null;
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
