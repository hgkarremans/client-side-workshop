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

    // Print console message based on user login status
    if (this.isLoggedIn) {
      console.log('User is logged in.');
      console.log('User token:', this.authService.getToken());
    } else {
      console.log('User is not logged in.');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
