import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@avans-nx-workshop/user';

@Component({
  selector: 'clientside-nx-workshop-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [],
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  ticket: ITicket | undefined;
  ownerFirstName: string | undefined;
  private ticketSubscription: Subscription | undefined;
  jwtToken: string | null = null;
  decodedToken: any | null = null; // Variable to store the decoded token

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Fetch JWT token from AuthService
    this.jwtToken = this.authService.getToken();
    console.log('JWT Token:', this.jwtToken);

    // Decode token and store it in decodedToken variable
    if (this.jwtToken) {
      this.decodedToken = this.authService.decodeToken(this.jwtToken);
      console.log('Decoded Token:', this.decodedToken);

      // Access and print the role property if it exists
      if (this.decodedToken && this.decodedToken.role) {
        console.log('User Role:', this.decodedToken.role);
      }
    }

    this.ticketSubscription = this.route.paramMap.subscribe((params) => {
      const ticketId = params.get('id');
      console.log('Ticket ID:', ticketId);

      // Log to see if this block is executed
      console.log('Before service call:', ticketId);

      this.ticketService.getTicketById(ticketId || '').subscribe(
        (ticket) => {
          this.ticket = ticket;
          console.log('Ticket:', this.ticket);
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
  claimTicket() {
    console.log('Claiming ticket');
    // console.log('Ticket:', this.ticket);
    // console.log('Decoded Token:', this.decodedToken);
    this.ticketService.updateTicketOwner(this.ticket?._id || '', this.decodedToken?.sub || '').subscribe(
      (ticket) => {
        console.log('Ticket claimed:', ticket);
      },
      (error) => {
        console.error('Error claiming ticket:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
