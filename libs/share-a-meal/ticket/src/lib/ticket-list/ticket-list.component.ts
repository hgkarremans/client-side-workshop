import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITicket, IDivision } from '@avans-nx-workshop/shared/api';
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
  tickets: ITicket[] | null = [];
  divisions: IDivision[] = [];
  private destroy$ = new Subject<void>();
  isLoggedIn = false;
  decodedToken: any | null = null;
  selectedDivisionId: string | null = null;
  originalTickets: ITicket[] | null = null;  // Add originalTickets property

  constructor(private ticketService: TicketService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    // Fetch all tickets initially and store them in originalTickets
    this.ticketService
      .getTickets()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response) => {
          this.originalTickets = response;
          this.tickets = this.originalTickets;
          console.log('All Tickets:', this.tickets);
        },
        (error) => {
          console.error('Error fetching all tickets:', error);
        }
      );

    // Fetch divisions
    this.ticketService
      .getDivisions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response) => {
          this.divisions = response;
        },
        (error) => {
          console.error('Error fetching divisions:', error);
        }
      );

    const token = this.authService.getToken();

    if (token) {
      this.decodedToken = this.authService.decodeToken(token);
      console.log('Decoded Token:', this.decodedToken);
    }

    if (this.isLoggedIn) {
      console.log('User is logged in.');
      console.log('User token:', token);
    } else {
      console.log('User is not logged in.');
      console.log('User token when not logged in:', token);
    }
  }

  resetDivisionFilter(): void {
    this.selectedDivisionId = null;
    this.fetchAllTickets(); // Reset filter, fetch all tickets
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isCreateButtonVisible(): boolean {
    return this.decodedToken?.role === 'Admin' || this.decodedToken?.role === 'Editor';
  }

  filterTicketsByDivision(divisionId: string | null): void {
    this.selectedDivisionId = divisionId;
    this.fetchTicketsByDivision(); // Fetch tickets based on the selected division
  }

  private fetchTicketsByDivision(): void {
    if (this.selectedDivisionId) {
      console.log('Fetching tickets by division:', this.selectedDivisionId);

      // Use nullish coalescing operator to ensure a default empty array
      const ticketsArray = this.originalTickets ?? [];

      ticketsArray.forEach(ticket => console.log('Ticket divisionId:', ticket?.divisionId));

      this.tickets = ticketsArray.filter((ticket) => {
        console.log('Comparing:', ticket?.divisionId, 'with', this.selectedDivisionId);
        return ticket?.divisionId === this.selectedDivisionId;
      }) || [];

      console.log('Tickets by division:', this.tickets);
    }
  }

  private fetchAllTickets(): void {
    this.ticketService
      .getTickets()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response) => {
          this.tickets = response;
          console.log('All Tickets:', this.tickets);
        },
        (error) => {
          console.error('Error fetching all tickets:', error);
        }
      );
  }
}
