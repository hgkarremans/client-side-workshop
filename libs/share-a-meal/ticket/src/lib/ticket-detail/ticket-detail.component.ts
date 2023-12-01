import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket, User } from '@avans-nx-workshop/shared/api';
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
  ticket!: ITicket;
  ownerFirstName: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private userService: UserService, 
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ticketId = Number(params.get('id'));
      
      this.ticketService.getTicketById(ticketId).subscribe((ticket) => {
        this.ticket = ticket;
        
        if (this.ticket.owner) {
          this.userService.getUserById(this.ticket.owner.id).subscribe((owner) => {
            this.ownerFirstName = owner?.firstName;
          });
        }
        
        this.ticketService.setCurrentTicketId(this.ticket.id);
        
        console.log('Owner:', this.ownerFirstName);
        console.log(this.ticket.owner);
      });
    });
  }

  openDeleteConfirmationModal() {
    const modalRef = this.modalService.open(DeleteConformationModalComponent);
    modalRef.result.then((result) => {
      if (result === 'Delete') {
        // Perform delete operation using the TicketService
        this.ticketService.deleteTicket(this.ticket.id).subscribe(() => {
          console.log('Item deleted!');
        }, (error) => {
          console.error('Error deleting item:', error);
        });
      }
    });
  }
}
