import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITicket, TicketStatus, User } from '@avans-nx-workshop/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { UserService } from '@avans-nx-workshop/user';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clientside-nx-workshop-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styles: [],
})
export class TicketEditComponent implements OnInit, OnDestroy {
  ticket!: ITicket;
  ticketForm!: FormGroup;
  users: User[] = [];
  statusOptions = Object.values(TicketStatus);
  private ticketSubscription: Subscription | undefined;

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
    this.ticketSubscription = this.route.paramMap
      .pipe(
        switchMap((params) => {
          const ticketId = params.get('id');
          return this.ticketService.getTicketById(ticketId || '');
        })
      )
      .subscribe((ticket) => {
        this.ticket = ticket;

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
      const ticketId = this.ticket._id; // Assuming _id is the correct property
      this.ticketService.updateTicket(ticketId, this.ticketForm.value).subscribe(
        () => {
          console.log('Ticket updated successfully');
          this.router.navigate(['tickets/', this.ticket._id]);
        },
        (error) => {
          console.error('Error updating ticket:', error);
        }
      );
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
