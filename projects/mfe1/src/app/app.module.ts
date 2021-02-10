import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { AuthLibModule } from '@auth-lib';
import { SharedLibModule } from 'projects/shared-lib/src/lib/shared-lib.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from 'projects/auth-lib/src/lib/app-state/state/user.state';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule, AuthLibModule, SharedLibModule,
    RouterModule.forRoot(APP_ROUTES),
    NgxsModule.forRoot([UserState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  declarations: [
    HomeComponent,
    AppComponent, 
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
