import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login, Logout, User } from '@auth-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  username:string;
  password:string;
  constructor(private store: Store) { }

  ngOnInit() {
  }
  getCurrentUser(): User {
    return this.store.selectSnapshot<User>((state) => state.user.user.name);
  }
  login(event:User){
    this.store.dispatch(new Login(event));
  }
  logOut(){
    this.store.dispatch(new Logout());
}
}