import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket, User } from '@avans-nx-workshop/shared/api';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
import { UserService } from '@avans-nx-workshop/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [],
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  ticket!: ITicket;
  ownerFirstName: string | undefined;
  private ticketSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const ticketId = Number(params.get('id'));

      this.ticketSubscription = this.ticketService.getTicketById(ticketId).subscribe((ticket) => {
        this.ticket = ticket;

        if (this.ticket.owner) {
          const owner = this.userService.getUserById(this.ticket.owner.id);
          this.ownerFirstName = owner?.firstName;
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
        this.ticketService.deleteTicket(this.ticket.id).subscribe(
          () => {
            console.log('Item deleted!');
          },
          (error) => {
            console.error('Error deleting item:', error);
          }
        );
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the ticket subscription to prevent memory leaks
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
