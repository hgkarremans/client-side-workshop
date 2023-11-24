import { Component , OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'clientside-nx-workshop-delete-conformation-modal',
  templateUrl: './delete-conformation-modal.component.html',
  styles: [],
})
export class DeleteConformationModalComponent implements OnInit {
  ticketId: number | undefined;
  constructor(
    public activeModal: NgbActiveModal,
    private ticketService: TicketService
    ) {}
  ngOnInit(): void {
    this.ticketId = this.ticketService.getCurrentTicketId();
  }
  async confirmDelete() {
    try {
      if (this.ticketId !== undefined) {
        console.log('Deleting ticket with id:', this.ticketId);
        this.ticketService.deleteTicket(this.ticketId);
        // Uncomment the above line when you are ready to perform the actual delete
        this.activeModal.close('Delete');
      } else {
        console.error('Ticket ID not provided for deletion.');
      }
    } catch (error) {
      console.error('Error deleting ticket:', error);

    } finally {
      // Clear the current ticket ID after deletion
      this.ticketService.clearCurrentTicketId();
    }
  }
}
