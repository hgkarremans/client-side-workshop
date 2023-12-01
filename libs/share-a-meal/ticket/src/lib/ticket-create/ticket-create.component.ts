import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { ITicket } from '@avans-nx-workshop/shared/api';

@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent implements OnInit {
  ticketForm!: FormGroup;
  ticket!: ITicket;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['Active', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
      owner: [null, Validators.required],  // Set up a default value or null for the owner
    });

    this.route.paramMap.subscribe((params) => {
      const ticketId = Number(params.get('id'));
      // Check if ticketId is provided and fetch ticket details from the service
      if (ticketId) {
        this.ticketService.getTicketById(ticketId).subscribe((ticket) => {
          this.ticket = ticket;
          // Patch the ticket details to the form
          this.ticketForm.patchValue(ticket);
        });
      }
    });
  }

  saveTicket(): void {
    if (this.ticketForm.valid) {
      // If the ticket already exists, update it; otherwise, add a new ticket
      if (this.ticket) {
        const updatedTicket = {
          ...this.ticket,
          ...this.ticketForm.value,
        };
        this.ticketService.updateTicket(updatedTicket.id, updatedTicket).subscribe(() => {
          console.log('Ticket updated successfully');
        });
      } else {
        this.ticketService.addTicket(this.ticketForm.value).subscribe(() => {
          console.log('Ticket added successfully');
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
