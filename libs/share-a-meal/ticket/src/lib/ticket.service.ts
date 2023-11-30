import { Injectable } from '@angular/core';
import { Ticket, TicketStatus } from '@avans-nx-workshop/shared/api';
import { UserService } from '@avans-nx-workshop/user';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private currentTicketId: number | undefined;
  constructor(private userService: UserService) {}

  readonly tickets: Ticket[] = [
    { id: 1, title: 'Ticket 1', price: 10, date: new Date(), status: TicketStatus.active, seat: 1, owner: this.userService.getUserById(0) },
    { id: 2, title: 'Ticket 2', price: 20, date: new Date(), status: TicketStatus.active, seat: 2, owner: this.userService.getUserById(1) },    
    { id: 3, title: 'Ticket 3', price: 30, date: new Date(), status: TicketStatus.inactive, seat: 3, owner: this.userService.getUserById(2) },
    { id: 4, title: 'Ticket 4', price: 40, date: new Date(), status: TicketStatus.active, seat: 4, owner: this.userService.getUserById(3) },
    { id: 5, title: 'Ticket 5', price: 50, date: new Date(), status: TicketStatus.inactive, seat: 5, owner: this.userService.getUserById(4)},
    { id: 6, title: 'Ticket 6', price: 60, date: new Date(), status: TicketStatus.active, seat: 6, owner: this.userService.getUserById(5)},
    { id: 7, title: 'Ticket 7', price: 70, date: new Date(), status: TicketStatus.inactive, seat: 7, owner: this.userService.getUserById(6)},
    { id: 8, title: 'Ticket 8', price: 80, date: new Date(), status: TicketStatus.active, seat: 8, owner: this.userService.getUserById(7)},
  ];
  getTickets(): Ticket[] {
    console.log('getTickets aangeroepen');
    return this.tickets;
  }
  addTicket(ticket: Ticket):void{
    console.log('addTicket aangeroepen');
    this.tickets.push(ticket);
  }
  getLenght(): number {
    console.log('getLenght aangeroepen');
    return this.tickets.length;
  }
  deleteTicket(id: number): void {
    const index = this.tickets.findIndex((ticket) => ticket.id === id);
    if (index !== -1) {
      this.tickets.splice(index, 1);
    } else {
      console.error(`Ticket met id ${id} niet gevonden`);
    }
  }
  setCurrentTicketId(id: number): void {
    console.log('setCurrentTicketId aangeroepen');
    this.currentTicketId = id;
  }
  getCurrentTicketId(): number | undefined {
    console.log('getCurrentTicketId aangeroepen');
    return this.currentTicketId;
  }
  clearCurrentTicketId(): void {
    console.log('clearCurrentTicketId aangeroepen');
    this.currentTicketId = undefined;
  }

  getTicketById(id: number): Ticket {
    console.log('getTicketById aangeroepen');
    return this.tickets.filter((ticket) => ticket.id === id)[0];
  }

  updateTicket(id: number, updatedTicketsData: any): void {
    console.log('updateTicket aangeroepen');
    const index = this.tickets.findIndex((ticket) => ticket.id === id);

    if (index !== -1) {
      const updatedTickets = {...updatedTicketsData, id};
      this.tickets[index] = updatedTickets;

    } else {
      console.error(`Ticket met id ${id} niet gevonden`);
    }
  }
}