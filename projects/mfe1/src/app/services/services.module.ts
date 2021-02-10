import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { Services_ROUTES } from './services.routes';
import { RouterModule } from '@angular/router';
import { AuthLibModule } from '@auth-lib';
import { SharedLibModule } from 'projects/shared-lib/src/lib/shared-lib.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
@NgModule({
  declarations: [ServiceListComponent],
  imports: [
    CommonModule,AuthLibModule,SharedLibModule,
    RouterModule.forChild(Services_ROUTES),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ]
})
export class ServicesModule { }
