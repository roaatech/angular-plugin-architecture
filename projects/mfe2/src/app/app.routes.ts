import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'services-render', 
        loadChildren: () => import('./services-render/services-render.module')
            .then(m => m.ServicesRenderModule)
    }
];
