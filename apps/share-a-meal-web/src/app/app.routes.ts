import { Route } from '@angular/router';
import { UserCreateComponent, UserDetailsComponent, UserEditComponent, UserListComponent } from '@avans-nx-workshop/user';
import { AboutComponent, HomepageComponent } from '@avans-nx-workshop/share-a-meal/features';
import { TicketListComponent } from '@avans-nx-workshop/tickets';

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
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
