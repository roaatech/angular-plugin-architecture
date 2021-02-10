import { Routes } from "@angular/router";
import { RequestsComponent } from "./requests/requests.component";
import { ServicesComponent } from "./services/services.component";

export const Services_Render_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'services'
    },
    {
      path: 'services',
      component: ServicesComponent
    },
    {
      path: 'requests',
      component: RequestsComponent
    }
];