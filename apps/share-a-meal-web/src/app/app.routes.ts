import { Route } from '@angular/router';
import { UserDetailsComponent, UserEditComponent, UserListComponent } from '@avans-nx-workshop/user';
import { AboutComponent } from '@avans-nx-workshop/share-a-meal/features';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: UserListComponent,
    },
    {
        path: 'users',
        component: UserListComponent,
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
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
