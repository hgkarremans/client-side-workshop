import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service'; // Adjust the path based on your project structure
import { User } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'clientside-nx-workshop-delete-conformation-modal',
  templateUrl: './delete-conformation-modal.component.html',
  styles: [],
})
export class DeleteConformationModalComponent 
//implements OnInit 
{
  userId: number | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) {}

  // ngOnInit(): void {
  //   this.userId = this.userService.getCurrentUserId();
  // }

  async confirmDelete() {
    // try {
    //   if (this.userId !== undefined) {
    //     console.log('Deleting user with id:', this.userId);
    //     this.userService.deleteUser(this.userId);
    //     // Uncomment the above line when you are ready to perform the actual delete
    //     this.activeModal.close('Delete');
    //   } else {
    //     console.error('User ID not provided for deletion.');
    //   }
    // } catch (error) {
    //   console.error('Error deleting user:', error);
    // } finally {
    //   // Clear the current user ID after deletion
    //   this.userService.clearCurrentUserId();
    // }
  }
}