import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { AuthLibModule, UserState } from '@auth-lib';
import { SharedLibModule } from 'shared-lib';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'projects/mfe1/src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
@NgModule({
  imports: [
    BrowserModule,AuthLibModule,SharedLibModule,
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
