import { Component, OnInit } from '@angular/core';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'clientside-nx-workshop-ticket-list',
  templateUrl: './ticket-list.component.html',
  styles: [],
})
export class TicketListComponent implements OnInit {
  tickets: ITicket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
    });
  }
}
