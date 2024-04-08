import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service'; 
import { User } from '@avans-nx-workshop/shared/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'clientside-nx-workshop-users-friends',
  templateUrl: './users-friends.component.html',
  styleUrls: ['./users-friends.component.css'],
})
export class UsersFriendsComponent implements OnInit {
  friends: User[] = [];
  token: string | null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.token = this.authService.getToken();
  }

  ngOnInit(): void {
    this.userService.getUserFriends('2870.0', this.token).subscribe(
      (response: any) => {
        if (response?.results && response.results.length > 0) {
          this.friends = response.results.map((result: any) => result);
          console.log('Friends:', this.friends);
        } else {
          console.log('No friends found.');
        }
      },
      (error) => {
        console.error('Error fetching user friends:', error);
      }
    );
  }

  openSpinner(): void {
    const dialogRef = this.dialog.open(SpinnerDialogComponent, {
      width: '250px',
      data: { emails: [] } // Pass an empty array initially
    });

    this.userService.getUsers().subscribe(
      (users: IUser[]) => {
        dialogRef.componentInstance.data.emails = users.map(user => user.emailAddress);
      },
      (error) => {
        console.error('Error fetching user emails:', error);
      }
    );
  }
}

@Component({
  selector: 'spinner-dialog',
  template: `
    <h2 mat-dialog-title>Loading User Emails</h2>
    <mat-spinner></mat-spinner>
    <div mat-dialog-content>
      <p *ngFor="let email of data.emails">{{ email }}</p>
    </div>
  `,
})
export class SpinnerDialogComponent {
  constructor(public dialogRef: MatDialogRef<SpinnerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
