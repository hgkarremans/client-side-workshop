import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { DeleteConformationModalComponent } from './delete-conformation-modal/delete-conformation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './ticket.service';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  providers: [TicketService],
  declarations: [
    TicketListComponent,
    TicketDetailComponent,
    TicketCreateComponent,
    TicketEditComponent,
    DeleteConformationModalComponent,
  ],
  exports: [TicketListComponent, TicketDetailComponent, TicketCreateComponent, TicketEditComponent],
})
export class TicketModule {}
