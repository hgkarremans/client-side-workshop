import { Route } from '@angular/router';
import { UserCreateComponent, UserDetailsComponent, UserEditComponent, UserListComponent } from '@avans-nx-workshop/user';
import { AboutComponent, HomepageComponent } from '@avans-nx-workshop/share-a-meal/features';
import { TicketCreateComponent, TicketDetailComponent, TicketEditComponent, TicketListComponent } from '@avans-nx-workshop/tickets';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: HomepageComponent,
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
        path: 'users/create',
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
        path: 'tickets',
        component: TicketListComponent
    },
    {
        path: 'tickets/create',
        component: TicketCreateComponent
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
