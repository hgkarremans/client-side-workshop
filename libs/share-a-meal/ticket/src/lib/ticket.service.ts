import { Injectable } from '@angular/core';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  private readonly apiUrl = 'http://localhost:3000/tickets';

  constructor(private readonly http: HttpClient) {}

  getTickets(): Observable<ITicket[]> {
    console.log('getTickets aangeroepen in service frontend');
    return this.http.get<ITicket[]>(this.apiUrl);
  }

  addTicket(ticket: ITicket): Observable<ITicket> {
    return this.http.post<ITicket>(this.apiUrl, ticket);
  }

  getLenght(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/length`);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setCurrentTicketId(id: number): void {
    console.log('setCurrentTicketId aangeroepen');
    // You may perform local operations if needed
  }

  getCurrentTicketId(): number | undefined {
    console.log('getCurrentTicketId aangeroepen');
    // You may perform local operations if needed
    return undefined;
  }

  clearCurrentTicketId(): void {
    console.log('clearCurrentTicketId aangeroepen');
    // You may perform local operations if needed
  }

  getTicketById(id: number): Observable<ITicket> {
    return this.http.get<ITicket>(`${this.apiUrl}/${id}`);
  }

  updateTicket(id: number, updatedTicketsData: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, updatedTicketsData);
  }
}
