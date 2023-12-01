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
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.userService.getUserById(userId).subscribe((user) => {
        this.user = user;
      });
    });
  }

  openDeleteConfirmationModal() {
    const modalRef = this.modalService.open(DeleteConformationModalComponent);

    // Handle the result when the modal is closed (e.g., user clicked Delete)
    modalRef.result.then((result) => {
      if (result === 'Delete') {
        // Perform the delete action here
        this.userService.deleteUser(this.user.id).subscribe(() => {
          console.log('Item deleted!');
        });
      }
    });
  }
}
