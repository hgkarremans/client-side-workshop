import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket, User } from '@avans-nx-workshop/shared/api';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'clientside-nx-workshop-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [],
})
export class TicketDetailComponent {
  ticket!: Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ticketId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(ticketId);
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
