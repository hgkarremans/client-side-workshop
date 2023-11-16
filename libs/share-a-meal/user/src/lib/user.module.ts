import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UserListComponent, UserEditComponent, UserDetailsComponent],
  exports: [UserListComponent, UserEditComponent],
})
export class UserModule {}
