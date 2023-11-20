import { Injectable } from '@angular/core';
import { Ticket, TicketStatus } from '@avans-nx-workshop/shared/api';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  readonly tickets: Ticket[] = [
    { id: 1, title: 'Ticket 1', price: 10, date: new Date(), status: TicketStatus.active, seat: 1 },
    { id: 2, title: 'Ticket 2', price: 20, date: new Date(), status: TicketStatus.active, seat: 2 },    
    { id: 3, title: 'Ticket 3', price: 30, date: new Date(), status: TicketStatus.active, seat: 3 },
    { id: 4, title: 'Ticket 4', price: 40, date: new Date(), status: TicketStatus.active, seat: 4 },
  ];
  getTickets(): Ticket[] {
    console.log('getTickets aangeroepen');
    return this.tickets;
  }
}