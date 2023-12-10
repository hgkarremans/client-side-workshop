// ticket-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';
import { AuthService } from '@avans-nx-workshop/user';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-list',
  templateUrl: './ticket-list.component.html',
  styles: [],
})
export class TicketListComponent implements OnInit, OnDestroy {
  tickets: ITicket[] | null = null;
  private destroy$ = new Subject<void>();
  isLoggedIn = false;
  decodedToken: any | null = null; // Add this property to store the decoded token

  // Inject TicketService and AuthService in the constructor
  constructor(private ticketService: TicketService, private authService: AuthService) {}

  ngOnInit(): void {
    // Use AuthService to check if the user is logged in
    this.isLoggedIn = this.authService.isLoggedIn();

    // Continue fetching tickets regardless of user login status
    this.ticketService.getTickets().pipe(takeUntil(this.destroy$)).subscribe(
      (response) => {
        this.tickets = response;
        console.log('Tickets:', this.tickets);
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    );

    // Get the token from AuthService
    const token = this.authService.getToken();

    // Decode the token
    if (token) {
      this.decodedToken = this.authService.decodeToken(token);
      console.log('Decoded Token:', this.decodedToken);
    }

    // Print console message based on user login status
    if (this.isLoggedIn) {
      console.log('User is logged in.');
      console.log('User token:', token);
    } else {
      console.log('User is not logged in.');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();   
  }

  // Add a method to check if the "Create Ticket" button should be visible
  isCreateButtonVisible(): boolean {
    // Check if the user's role is 'Admin' or 'Editor'
    return this.decodedToken?.role === 'Admin' || this.decodedToken?.role === 'Editor';
  }
}
