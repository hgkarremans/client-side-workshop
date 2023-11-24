import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { DeleteConformationModalComponent } from './delete-conformation-modal/delete-conformation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
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
