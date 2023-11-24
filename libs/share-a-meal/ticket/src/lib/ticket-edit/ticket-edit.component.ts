import { Component, OnInit } from '@angular/core';
import { Ticket, TicketStatus } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'clientside-nx-workshop-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styles: [],
})
export class TicketEditComponent implements OnInit {
  ticket!: Ticket;
  ticketForm!: FormGroup;
  statusOptions = Object.values(TicketStatus);

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private ticketService: TicketService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(userId);


      this.ticketForm.patchValue({
        title: this.ticket.title,
        price: this.ticket.price,
        date: this.ticket.date,
        status: this.ticket.status,
        seat: this.ticket.seat,
      });
    });
  }
  saveTicket(): void {
    if (this.ticketForm.valid) {
      this.ticketService.updateTicket(this.ticket.id,this.ticketForm.value);
      this.router.navigate(['tickets/', this.ticket.id]);
    } else {
      console.log('Form is invalid');
    }
  }
    
}

