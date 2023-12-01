import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service'; // Adjust the path based on your project structure
import { User } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-delete-conformation-modal',
  templateUrl: './delete-conformation-modal.component.html',
  styles: [],
})
export class DeleteConformationModalComponent implements OnInit {
  userId: number | undefined;
  private userIdSubscription: Subscription;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) {
    this.userIdSubscription = this.userService.getUserIdToDelete().subscribe((id) => {
      this.userId = id;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent memory leaks
    this.userIdSubscription.unsubscribe();
  }

  async confirmDelete() {
    try {
      if (this.userId !== undefined) {
        console.log('Deleting user with id:', this.userId);
        
        // Subscribe to deleteUser to trigger the HTTP request
        this.userService.deleteUser(this.userId).subscribe(() => {
          // Uncomment the above line when you are ready to perform the actual delete
          this.activeModal.close('Delete');
        });
      } else {
        console.error('User ID not provided for deletion.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}
