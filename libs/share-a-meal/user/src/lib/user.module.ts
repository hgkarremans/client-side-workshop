import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DeleteConformationModalComponent } from './delete-conformation-modal/delete-conformation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent,
    DeleteConformationModalComponent,
    UserCreateComponent,
    UserLoginComponent,
  ],
  providers: [UserService],
  exports: [
    UserListComponent,
    UserEditComponent,
    DeleteConformationModalComponent,
    UserLoginComponent
  ],
})
export class UserModule {}
