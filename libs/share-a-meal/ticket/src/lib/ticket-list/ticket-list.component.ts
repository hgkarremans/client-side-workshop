// ticket-list.component.ts

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
  divisionId: string | null = null;

  constructor(private ticketService: TicketService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    // Fetch all tickets initially
    this.fetchAllTickets();

    // Fetch divisions
    this.ticketService
      .getDivisions()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response) => {
          this.divisions = response;
          console.log('Divisions:', this.divisions);
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
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isCreateButtonVisible(): boolean {
    return this.decodedToken?.role === 'Admin' || this.decodedToken?.role === 'Editor';
  }

  filterTicketsByDivision(divisionId: string | null): void {
    this.divisionId = divisionId;
    this.updateFilteredTickets();
  }

  resetDivisionFilter(): void {
    this.divisionId = null;
    this.updateFilteredTickets();
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

  private updateFilteredTickets(): void {
    if (this.divisionId) {
      // Filter tickets based on the selected division
      this.ticketService
        .getTicketsByDivision(this.divisionId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (response) => {
            this.tickets = response;
            console.log('Filtered Tickets:', this.tickets);
          },
          (error) => {
            console.error('Error fetching filtered tickets:', error);
          }
        );
    } else {
      // Fetch all tickets
      this.fetchAllTickets();
    }
  }
}
