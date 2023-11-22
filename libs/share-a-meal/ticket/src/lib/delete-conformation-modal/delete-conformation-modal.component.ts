import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'clientside-nx-workshop-delete-conformation-modal',
  templateUrl: './delete-conformation-modal.component.html',
  styles: [],
})
export class DeleteConformationModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
  confirmDelete() {
    // Implement your delete logic here
    this.activeModal.close('Delete');
  }
}
