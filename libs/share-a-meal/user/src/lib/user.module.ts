import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DeleteConformationModalComponent } from './delete-conformation-modal/delete-conformation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent,
    DeleteConformationModalComponent,
  ],
  exports: [UserListComponent, UserEditComponent, DeleteConformationModalComponent],
})
export class UserModule {}
