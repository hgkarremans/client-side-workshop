import { Component, OnInit } from '@angular/core';
import { Ticket, TicketStatus } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'clientside-nx-workshop-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styles: [],
})
export class TicketEditComponent implements OnInit {
  ticket!: Ticket;
  ticketForm!: FormGroup
;
  statusOptions = Object.values(TicketStatus);

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      status: [''], 
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(userId);


      this.ticketForm.patchValue({
        status: this.ticket.status,
      });
    });
  }
}

