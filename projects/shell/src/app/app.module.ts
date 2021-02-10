import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { AuthLibModule } from '@auth-lib';
import { FormsModule } from '@angular/forms';
import { SharedLibModule } from 'shared-lib';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from 'projects/auth-lib/src/lib/app-state/state/user.state';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'projects/mfe1/src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthLibModule,
    SharedLibModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    NgxsModule.forRoot([UserState],{
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
