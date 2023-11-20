import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TicketListComponent],
  exports: [TicketListComponent],
})
export class TicketModule {}
