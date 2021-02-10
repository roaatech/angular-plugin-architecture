import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { RequestsComponent } from './requests/requests.component';
import { Services_Render_ROUTES } from './services-render.routes';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from '@auth-lib';
import { SharedLibModule } from 'shared-lib';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';


@NgModule({
  declarations: [ServicesComponent, RequestsComponent],
  imports: [
    CommonModule,AuthLibModule,SharedLibModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    RouterModule.forChild(Services_Render_ROUTES)
  ]
})
export class ServicesRenderModule { }
