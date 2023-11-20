import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeaturesModule } from '@avans-nx-workshop/share-a-meal/features';
import { UserModule } from '@avans-nx-workshop/user';
import { UiModule } from '@avans-nx-workshop/ui';
import { TicketModule } from '@avans-nx-workshop/tickets';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeaturesModule, UserModule, UiModule, TicketModule],
  selector: 'clientside-nx-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'share-a-meal-web';
}
