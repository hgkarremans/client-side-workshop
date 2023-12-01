import { Component, OnInit } from '@angular/core';
import { Ticket, User } from '@avans-nx-workshop/shared/api';
import { TicketService } from '../ticket.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@avans-nx-workshop/user';


@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent implements OnInit {
  ticketForm!: FormGroup;
  ticket!: Ticket;
  users: User[] = [];  // Replace 'any[]' with the actual type of your user objects

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private userService: UserService,  // Replace with your actual user service
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['Active', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
      owner: ['', Validators.required],  // Add a control for the owner
    });

    // Fetch users from the user service
    this.users= this.userService.getUsers();

    this.route.paramMap.subscribe((params) => {
      const ticketId = Number(params.get('id'));
      this.ticket = this.ticketService.getTicketById(ticketId);
    });
  }

  saveTicket(): void {
    console.log('Form:', this.ticketForm.value);
    if (this.ticketForm.valid) {
      const newTicket = {
        id: this.ticketService.getTickets().length + 1,
        ...this.ticketForm.value,
      };
  
      console.log('New Ticket:', newTicket);
      this.ticketService.addTicket(newTicket);
    } else {
      console.log('Form is invalid');
    }
  }
}
