import { Route } from '@angular/router';
import { UserCreateComponent, UserDetailsComponent, UserEditComponent, UserListComponent, UserLoginComponent, UsersFriendsComponent } from '@avans-nx-workshop/user';
import { AboutComponent } from '@avans-nx-workshop/share-a-meal/features';
import { TicketCreateComponent, TicketDetailComponent, TicketEditComponent, TicketListComponent } from '@avans-nx-workshop/tickets';
import { AuthGuard } from '@avans-nx-workshop/user';
export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: TicketListComponent,
    },
    {
        path: 'tickets',
        component: TicketListComponent
    },
    {
        path: 'register',
        component: UserCreateComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'tickets',
        component: TicketListComponent
    },
    {
        path: 'tickets/create',
        component: TicketCreateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tickets/:id',
        component: TicketDetailComponent
    },
    {
        path: 'tickets/:id/edit',
        component: TicketEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/friends',
        component: UsersFriendsComponent,
        
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'tickets',
    }
];
