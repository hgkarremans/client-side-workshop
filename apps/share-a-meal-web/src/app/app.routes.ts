import { Route } from '@angular/router';
import { UserCreateComponent, UserDetailsComponent, UserEditComponent, UserListComponent, UserLoginComponent } from '@avans-nx-workshop/user';
import { AboutComponent } from '@avans-nx-workshop/share-a-meal/features';
import { TicketCreateComponent, TicketDetailComponent, TicketEditComponent, TicketListComponent } from '@avans-nx-workshop/tickets';
// import { AuthGuard } from '@avans-nx-workshop/backend/features';
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
        path: 'users',
        component: UserListComponent,
    },
    {
        path: 'register',
        component: UserCreateComponent
    },
    {
        path: 'users/:id',
        component: UserDetailsComponent
    },
    {
        path: 'users/:id/edit',
        component: UserEditComponent
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
        // canActivate: [AuthGuard]
    },
    {
        path: 'tickets/:id',
        component: TicketDetailComponent
    },
    {
        path: 'tickets/:id/edit',
        component: TicketEditComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    // {
    //     path: '**',
    //     redirectTo: '',
    // }
];
