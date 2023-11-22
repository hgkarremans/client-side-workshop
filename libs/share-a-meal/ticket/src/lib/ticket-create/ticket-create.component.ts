import { Component } from '@angular/core';
import { Ticket } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketService.getTickets();
  }
}
