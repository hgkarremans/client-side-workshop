// ticket-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { Ticket, TicketStatus, User } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { UserService } from '@avans-nx-workshop/user';

@Component({
  selector: 'clientside-nx-workshop-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styles: [],
})
export class TicketEditComponent implements OnInit {
  ticket!: Ticket;
  ticketForm!: FormGroup;
  users: User[] = [];
  statusOptions = Object.values(TicketStatus);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
      owner: [null],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const ticketId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(ticketId);

      // Fetch users from the user service
      this.users = this.userService.getUsers();

      this.ticketForm.patchValue({
        title: this.ticket.title,
        price: this.ticket.price,
        date: this.ticket.date,
        status: this.ticket.status,
        seat: this.ticket.seat,
        owner: this.ticket.owner?.id,
      });
    });
  }

  saveTicket(): void {
    if (this.ticketForm.valid) {
      this.ticketService.updateTicket(this.ticket.id, this.ticketForm.value);
      this.router.navigate(['tickets/', this.ticket.id]);
    } else {
      console.log('Form is invalid');
    }
  }
}
