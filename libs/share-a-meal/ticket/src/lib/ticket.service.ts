import { Injectable } from '@angular/core';
import { Ticket, TicketStatus } from '@avans-nx-workshop/shared/api';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  readonly tickets: Ticket[] = [
    { id: 1, title: 'Ticket 1', price: 10, date: new Date(), status: TicketStatus.active, seat: 1, },
    { id: 2, title: 'Ticket 2', price: 20, date: new Date(), status: TicketStatus.active, seat: 2 },    
    { id: 3, title: 'Ticket 3', price: 30, date: new Date(), status: TicketStatus.inactive, seat: 3 },
    { id: 4, title: 'Ticket 4', price: 40, date: new Date(), status: TicketStatus.active, seat: 4 },
    { id: 5, title: 'Ticket 5', price: 50, date: new Date(), status: TicketStatus.inactive, seat: 5},
    { id: 6, title: 'Ticket 6', price: 60, date: new Date(), status: TicketStatus.active, seat: 6},
    { id: 7, title: 'Ticket 7', price: 70, date: new Date(), status: TicketStatus.inactive, seat: 7},
    { id: 8, title: 'Ticket 8', price: 80, date: new Date(), status: TicketStatus.active, seat: 8},
  ];
  getTickets(): Ticket[] {
    console.log('getTickets aangeroepen');
    return this.tickets;
  }

  getTicketById(id: number): Ticket {
    console.log('getTicketById aangeroepen');
    return this.tickets.filter((ticket) => ticket.id === id)[0];
  }
}