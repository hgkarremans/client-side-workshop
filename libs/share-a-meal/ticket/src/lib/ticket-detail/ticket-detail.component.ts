import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ITicket, User } from '@avans-nx-workshop/shared/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
import { UserService } from '@avans-nx-workshop/user';
import { Subscription } from 'rxjs';
import { DeleteConformationModalComponent } from '../delete-conformation-modal/delete-conformation-modal.component';

@Component({
  selector: 'clientside-nx-workshop-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [],
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  ticket: ITicket | undefined;
  ownerFirstName: string | undefined;
  private ticketSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.ticketSubscription = this.route.paramMap.subscribe((params) => {
      const ticketId = params.get('id');
      console.log('Ticket ID:', ticketId);
    
      // Log to see if this block is executed
      console.log('Before service call:', ticketId);
    
      this.ticketService.getTicketById(ticketId || '').subscribe(
        (ticket) => {
          this.ticket = ticket;
          console.log('Ticket:', this.ticket);
    
          if (this.ticket?.owner) {
            const owner = this.userService.getUserById(this.ticket.owner.id);
            this.ownerFirstName = owner?.firstName;
          }
        },
        (error) => {
          console.error('Error fetching ticket:', error);
        },
        () => {
          // Log to see if this block is executed
          console.log('After service call:', ticketId);
        }
      );
    });
    
  }

  openDeleteConfirmationModal() {
    this.ticketService.deleteTicket(this.ticket?._id || '').subscribe(
      () => {
        
        console.log('Ticket deleted');
      },
      (error) => {
        console.error('Error deleting ticket:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
