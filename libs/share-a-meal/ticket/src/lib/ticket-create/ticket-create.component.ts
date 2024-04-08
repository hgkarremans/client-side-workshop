// ticket-create.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { ITicket, IDivision, IClub } from '@avans-nx-workshop/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent implements OnInit, OnDestroy {
  ticketForm!: FormGroup;
  ticket: ITicket | undefined;
  divisions: IDivision[] = [];
  clubs: IClub[] = [];
  private ticketSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['Active', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
      divisionId: [''],
      homeClub: [''],
      opponentClub: [''],
    });

    this.ticketService.getClubs().subscribe((clubs) => {
      this.clubs = clubs;
    });

    this.ticketService.getDivisions().subscribe((divisions) => {
      this.divisions = divisions;
    });

    this.route.paramMap.subscribe((params) => {
      const ticketId = params.get('id');
      if (ticketId) {
        this.ticketSubscription = this.ticketService.getTicketById(ticketId).subscribe((ticket) => {
          this.ticket = ticket;
          this.ticketForm.patchValue(ticket);
        });
      }
    });
  }

  saveTicket(): void {
    if (this.ticketForm.valid) {
      // Get the form data
      const ticketData = this.ticketForm.value;
  
      // Combine homeClub and opponentClub into the clubs array
      ticketData.clubs = [ticketData.homeClub, ticketData.opponentClub];
  
      // Remove homeClub and opponentClub from the ticket data
      delete ticketData.homeClub;
      delete ticketData.opponentClub;
  
      // Call the addTicket method with the modified ticket data
      this.ticketService.addTicket(ticketData).subscribe(() => {
        console.log('Ticket added successfully');
      });
    } else {
      console.log('Form is invalid');
    }
  }
  

  ngOnDestroy(): void {
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
