import { Routes } from '@angular/router';
import { VisComponent } from './vis/vis.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: VisComponent,
        title: 'Vis page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Vis details',
    },
];
