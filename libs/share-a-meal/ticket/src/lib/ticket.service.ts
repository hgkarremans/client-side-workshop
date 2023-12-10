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

  getTicketsByDivision(divisionId: string | null = null): Observable<ITicket[]> {
    let url = this.apiUrl; // Use the default API URL
  
    if (divisionId) {
      url = this.divisionUrl; // Use the division API URL if divisionId is provided
    }
  
    let params = new HttpParams();
  
    if (divisionId) {
      params = params.set('division', divisionId);
    }
  
    return this.http
      .get<ApiResponse<IDivision[] | IDivision>>(url, { params: params })
      .pipe(
        takeUntil(this.destroy$),
        map((response) => {
          const divisions = (Array.isArray(response.results) ? response.results : [response.results]) as IDivision[];
          const selectedDivision = divisions.find((d) => d._id === divisionId);
          return selectedDivision?.tickets || [];
        })
      );
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
