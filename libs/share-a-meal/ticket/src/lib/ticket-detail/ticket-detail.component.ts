// ticket-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket, User } from '@avans-nx-workshop/shared/api';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
import { UserService } from '@avans-nx-workshop/user';

@Component({
  selector: 'clientside-nx-workshop-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [],
})
export class TicketDetailComponent implements OnInit {
  ticket!: Ticket;
  ownerFirstName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private userService: UserService, // Inject your user service
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ticketId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(ticketId);

      // Fetch owner details using the user service
      if (this.ticket && this.ticket.owner) {
        const owner = this.userService.getUserById(this.ticket.owner.id); // Use the user ID here
        this.ownerFirstName = owner?.firstName;
      }
      console.log('Owner:', this.ownerFirstName);
      console.log(this.ticket.owner);
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
