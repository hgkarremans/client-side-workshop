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
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UsersFriendsComponent } from './users-friends/users-friends.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule,FormsModule],
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserDetailsComponent,
    DeleteConformationModalComponent,
    UserCreateComponent,
    UserLoginComponent,
    UsersFriendsComponent,
  ],
  providers: [UserService, AuthGuard],
  exports: [
    UserListComponent,
    UserEditComponent,
    DeleteConformationModalComponent,
    UserLoginComponent,
    UsersFriendsComponent,
  ],
})
export class UserModule {}
