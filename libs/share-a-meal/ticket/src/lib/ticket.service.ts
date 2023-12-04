import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map, tap } from 'rxjs/operators';
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

  getTicketById(id: string): Observable<ITicket> {
    const url = `${this.apiUrl}/${id}`;
    console.log('API URL:', url);
  
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


  updateTicket(id: number, updatedTicketsData: Partial<ITicket>): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, updatedTicketsData).pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
