// ticket-create.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { ITicket, IDivision } from '@avans-nx-workshop/shared/api';
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
      division: [''],
    });

    // Load divisions for the dropdown
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
      const ticketData = this.ticketForm.value;

      // If a division is selected, add the ticket to the selected division
      if (ticketData.division) {
        // Associate the selected division's ID with the ticket
        ticketData.divisionId = ticketData.division;

        // Save the ticket with the associated divisionId
        this.ticketService.addTicket(ticketData).subscribe(() => {
          console.log('Ticket added successfully');
        });
      } else {
        // Handle the case where no division is selected
        this.ticketService.addTicket(ticketData).subscribe(() => {
          console.log('Ticket added successfully');
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from the ticket subscription to prevent memory leaks
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
