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
export class UserDetailsComponent {
  user!: User; // Add definite assignment assertion

  constructor(private route: ActivatedRoute, 
    private userService: UserService, 
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = Number(params.get('id'));
      this.user = this.userService.getUserById(userId); /* get the user id from somewhere */;
      this.userService.setCurrentUserId(userId);
      
    });
  }
  openDeleteConfirmationModal() {
    const modalRef = this.modalService.open(DeleteConformationModalComponent);

    // Handle the result when the modal is closed (e.g., user clicked Delete)
    modalRef.result.then((result) => {
      if (result === 'Delete') {
        // Perform the delete action here
        console.log('Item deleted!');
      }
    });
  }
}
