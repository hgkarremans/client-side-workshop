import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { ITicket, ApiResponse } from '@avans-nx-workshop/shared/api';

@Injectable({
  providedIn: 'root',
})
export class TicketService implements OnDestroy {
  private readonly apiUrl = 'http://localhost:3000/api/ticket';
  private destroy$ = new Subject<void>();

  constructor(private readonly http: HttpClient) {}

  getTickets(): Observable<ITicket[]> {
    return this.http
      .get<ApiResponse<ITicket[]>>(this.apiUrl)
      .pipe(
        takeUntil(this.destroy$),
        map((response) => (response.results || []) as ITicket[])
      );
  }

  addTicket(ticket: ITicket): Observable<ITicket> {
    return this.http.post<ITicket>(this.apiUrl, ticket).pipe(takeUntil(this.destroy$));
  }

  getLength(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/length`).pipe(takeUntil(this.destroy$));
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(takeUntil(this.destroy$));
  }

  setCurrentTicketId(id: number): void {
    console.log('setCurrentTicketId invoked');
    // You may perform local operations if needed
  }

  getCurrentTicketId(): number | undefined {
    console.log('getCurrentTicketId invoked');
    // You may perform local operations if needed
    return undefined;
  }

  clearCurrentTicketId(): void {
    console.log('clearCurrentTicketId invoked');
    // You may perform local operations if needed
  }

  getTicketById(id: number): Observable<ITicket> {
    return this.http.get<ITicket>(`${this.apiUrl}/${id}`).pipe(takeUntil(this.destroy$));
  }

  updateTicket(id: number, updatedTicketsData: Partial<ITicket>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, updatedTicketsData).pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
