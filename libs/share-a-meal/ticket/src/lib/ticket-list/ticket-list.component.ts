import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-list',
  templateUrl: './ticket-list.component.html',
  styles: [],
})
export class TicketListComponent implements OnInit, OnDestroy {
  tickets: ITicket[] = [];
  private ticketsSubscription: Subscription | undefined;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketsSubscription = this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the tickets subscription to prevent memory leaks
    if (this.ticketsSubscription) {
      this.ticketsSubscription.unsubscribe();
    }
  }
}
