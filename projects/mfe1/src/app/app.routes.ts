import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'services', 
        loadChildren: () => import('./services/services.module')
            .then(m => m.ServicesModule)
    }
];
