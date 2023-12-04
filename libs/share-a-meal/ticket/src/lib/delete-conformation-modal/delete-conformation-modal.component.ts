import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'clientside-nx-workshop-delete-conformation-modal',
  templateUrl: './delete-conformation-modal.component.html',
  styles: [],
})
export class DeleteConformationModalComponent implements OnInit {
  @Input() ticketId: string | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private ticketService: TicketService // Inject TicketService directly
  ) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  async confirmDelete() {
    try {
      if (this.ticketId) {
        await this.ticketService.deleteTicket(this.ticketId).toPromise();
        this.activeModal.close('Delete');
      } else {
        console.error('Ticket ID not provided for deletion.');
      }
    } catch (error) {
      console.error('Error deleting ticket:', error);
    } finally {
      this.ticketService.clearCurrentTicketId();
    }
  }
}
