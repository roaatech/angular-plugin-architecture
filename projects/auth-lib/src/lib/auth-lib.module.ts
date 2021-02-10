import { NgModule } from '@angular/core';
import { AuthLibComponent } from './auth-lib.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthLibComponent, AuthComponent, UserComponent],
  imports: [FormsModule,CommonModule
  ],
  exports: [AuthLibComponent,AuthComponent,UserComponent],
})
export class AuthLibModule { }
