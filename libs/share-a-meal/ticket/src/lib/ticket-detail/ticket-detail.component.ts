import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClub, ITicket, IPlayer } from '@avans-nx-workshop/shared/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from '../ticket.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@avans-nx-workshop/user';

@Component({
  selector: 'clientside-nx-workshop-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [],
})
export class TicketDetailComponent implements OnInit, OnDestroy {
  ticket: ITicket | undefined;
  ownerFirstName: string | undefined;
  private ticketSubscription: Subscription | undefined;
  jwtToken: string | null = null;
  decodedToken: any | null = null;
  clubs: IClub[] = [];
  players: IPlayer[] = [];
  team1Players: IPlayer[] = [];
  team2Players: IPlayer[] = [];

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch JWT token from AuthService
    this.jwtToken = this.authService.getToken();
    console.log('JWT Token:', this.jwtToken);

    // Decode token and store it in decodedToken variable
    if (this.jwtToken) {
      this.decodedToken = this.authService.decodeToken(this.jwtToken);
      console.log('Decoded Token:', this.decodedToken);

      // Access and print the role property if it exists
      if (this.decodedToken && this.decodedToken.role) {
        console.log('User Role:', this.decodedToken.role);
      }
    }

    this.ticketSubscription = this.route.paramMap.subscribe((params) => {
      const ticketId = params.get('id');
      console.log('Ticket ID:', ticketId);

      this.ticketService.getTicketById(ticketId || '').subscribe(
        (ticket) => {
          this.ticket = ticket;
          this.fetchClubs(ticket.clubs);
          console.log('Ticket:', this.ticket);
        },
        (error) => {
          console.error('Error fetching ticket:', error);
        }
      );
    });
  }

  openDeleteConfirmationModal() {
    this.ticketService.deleteTicket(this.ticket?._id || '').subscribe(
      () => {
        console.log('Ticket deleted');
      },
      (error) => {
        console.error('Error deleting ticket:', error);
      }
    );
  }

  claimTicket() {
    console.log('Claiming ticket');

    this.ticketService.updateTicketOwner(this.ticket?._id || '', this.decodedToken?.sub || '').subscribe(
      (ticket) => {
        console.log('Ticket claimed:', ticket);
        this.router.navigate(['/tickets']);
      },
      (error) => {
        console.error('Error claiming ticket:', error);
      }
    );
  }

  unclaimTicket() {
    console.log('Unclaiming ticket');
    this.ticketService.updateTicketOwner(this.ticket?._id || '', '').subscribe(
      (ticket) => {
        console.log('Ticket unclaimed:', ticket);
        this.router.navigate(['/tickets']);
      },
      (error) => {
        console.error('Error unclaiming ticket:', error);
      }
    );
  }

  fetchClubs(clubIds: string[]): void {
    this.ticketService.getClubs().subscribe((clubs) => {
      this.clubs = clubs.filter((club: IClub) => clubIds.includes(club._id));
  
      this.clubs.forEach((club, index) => {
        this.ticketService.getPlayersByClub(club._id).subscribe(
          (data: any) => {
            const playersArray = data.results;
            if (Array.isArray(playersArray)) {
              if (index % 2 === 0) {
                this.team1Players = this.team1Players.concat(playersArray);
              } else {
                this.team2Players = this.team2Players.concat(playersArray);
              }
            } else {
              console.error('Invalid data format for players:', data);
            }
          },
          (error) => {
            console.error('Error fetching players:', error);
          }
        );
      });
    });
  }

  ngOnDestroy(): void {
    if (this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }
  }
}
