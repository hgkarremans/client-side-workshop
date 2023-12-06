import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { ITicket } from '@avans-nx-workshop/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent implements OnInit, OnDestroy {
  ticketForm!: FormGroup;
  ticket: ITicket | undefined;
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

      if (this.ticket) {
        const updatedTicket = {
          ...this.ticket,
          ...ticketData,
        };

        this.ticketService.updateTicket(updatedTicket.id, updatedTicket).subscribe(() => {
          console.log('Ticket updated successfully');
        });
      } else {
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
