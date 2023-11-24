import { Component, OnInit } from '@angular/core';
import { Ticket } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent implements OnInit {
  ticketFrom!: FormGroup;
  ticket!: Ticket;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ticketFrom = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
    });

    this.route.paramMap.subscribe((params) => {
      const ticketId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(ticketId);
    });
  }

  saveTicket(): void {
    console.log('Form:', this.ticketFrom.value);
    if (this.ticketFrom.valid) {
      const newTicket = {
        id: this.ticketService.getTickets().length + 1,
        ...this.ticketFrom.value,
      };
      console.log('New Ticket:', newTicket);
      this.ticketService.addTicket(newTicket);
    } else {
      console.log('Form is invalid');
    }
  }
}