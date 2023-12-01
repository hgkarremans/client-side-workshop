import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { ITicket, User } from '@avans-nx-workshop/shared/api';
import { UserService } from '@avans-nx-workshop/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-create',
  templateUrl: './ticket-create.component.html',
  styles: [],
})
export class TicketCreateComponent implements OnInit, OnDestroy {
  ticketForm!: FormGroup;
  ticket!: ITicket;
  users: User[] = [];
  private ticketSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      status: ['Active', Validators.required],
      seat: ['', [Validators.required, Validators.min(1)]],
      owner: [null, Validators.required],
    });

    this.route.paramMap.subscribe((params) => {
      const ticketId = Number(params.get('id'));
      if (ticketId) {
        this.ticketSubscription = this.ticketService.getTicketById(ticketId).subscribe((ticket) => {
          this.ticket = ticket;
          this.ticketForm.patchValue(ticket);
        });
      }
    });

    // Fetch the list of users
    this.users = this.userService.getUsers();
  }

  saveTicket(): void {
    if (this.ticketForm.valid) {
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

  ngOnDestroy(): void {
    // Unsubscribe from the ticket subscription to prevent memory leaks
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
