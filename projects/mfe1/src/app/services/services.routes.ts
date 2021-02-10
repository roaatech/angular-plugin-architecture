import { Routes } from "@angular/router";
import { ServiceListComponent } from "./service-list/service-list.component";

export const Services_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'service-list'
    },
    {
      path: 'service-list',
      component: ServiceListComponent
    }
];