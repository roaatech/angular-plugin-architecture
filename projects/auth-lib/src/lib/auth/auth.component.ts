import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AuthLibService } from '../auth-lib.service';


@Component({
  selector: 'demo-auth',
  templateUrl: './auth.component.html',
  // styleUrls: ['./auth.component.css'],
   //encapsulation:ViewEncapsulation.None
})
export class AuthComponent {
  @Output('onLogin') onLogin = new EventEmitter<any>();
 // @Output('onLogout') onLogout = new EventEmitter<any>();
  constructor() { }

  userName: string;
  password: string;

  onLoginClick($event){
    this.onLogin.emit($event);
  }
  // onLogoutClick(event){
  //   this.onLogout.emit(event);
  // }


}
