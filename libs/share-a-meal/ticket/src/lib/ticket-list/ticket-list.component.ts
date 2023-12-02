import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';
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

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().pipe(takeUntil(this.destroy$)).subscribe(
      (response) => {
        this.tickets = response;
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
