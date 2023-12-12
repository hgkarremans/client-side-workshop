// ticket.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { DeleteConformationModalComponent } from './delete-conformation-modal/delete-conformation-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './ticket.service';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, HttpClientModule], // Add FormsModule here
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
