// ticket.service.ts

import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, tap } from 'rxjs/operators';
import { ITicket, ApiResponse, IDivision } from '@avans-nx-workshop/shared/api';

@Injectable({
  providedIn: 'root',
})
export class TicketService implements OnDestroy {
  private readonly apiUrl = 'http://localhost:3000/api/ticket';
  private readonly divisionUrl = 'http://localhost:3000/api/division';
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

  getTicketById(id: string): Observable<ITicket> {
    const url = `${this.apiUrl}/${id}`;
  
    return this.http
      .get<ApiResponse<ITicket>>(url)
      .pipe(
        takeUntil(this.destroy$),
        tap((response: ApiResponse<ITicket>) => console.log('Raw API Response:', response)),
        map((response) => (response.results as ITicket) || null)
      );
  }

  addTicket(ticket: ITicket): Observable<ITicket> {
    console.log(ticket);
    return this.http.post<ITicket>(this.apiUrl, ticket).pipe(takeUntil(this.destroy$));
  }

  deleteTicket(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(takeUntil(this.destroy$));
  }

  setCurrentTicketId(id: string): void {
    console.log('setCurrentTicketId invoked');
    // You may perform local operations if needed
  }

  getCurrentTicketId(): string | undefined {
    console.log('getCurrentTicketId invoked');
    // You may perform local operations if needed
    return undefined;
  }

  clearCurrentTicketId(): void {
    console.log('clearCurrentTicketId invoked');
    // You may perform local operations if needed
  }

  updateTicket(id: string, updatedTicketsData: Partial<ITicket>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, updatedTicketsData).pipe(takeUntil(this.destroy$));
  }

  getTicketsByDivision(divisionId: string): Observable<ITicket[]> {
    const params = new HttpParams().set('divisionId', divisionId);
    return this.http
      .get<ApiResponse<ITicket[]>>(this.apiUrl, { params })
      .pipe(
        takeUntil(this.destroy$),
        map((response) => (response.results || []) as ITicket[])
      );
  }
  addTicketToDivision(divisionId: string, ticket: ITicket): Observable<ITicket> {
    // Use the appropriate API endpoint for adding a ticket to a division
    const url = `${this.divisionUrl}/${divisionId}`;
  
    // Assuming the server expects a PUT request with the ticket data
    return this.http.put<ITicket>(url, { ticket }).pipe(takeUntil(this.destroy$));
  }

  getDivisions(): Observable<IDivision[]> {
    return this.http
      .get<ApiResponse<IDivision[]>>(this.divisionUrl)
      .pipe(
        takeUntil(this.destroy$),
        map((response) => (response.results || []) as IDivision[])
      );
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
