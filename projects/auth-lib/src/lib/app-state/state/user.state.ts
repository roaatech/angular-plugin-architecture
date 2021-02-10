import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../models/User';
import { Login, Logout } from '../actions/user.action';
import { Injectable } from '@angular/core';

export class UserStateModel {
  user: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: {name : '' , password: ''} ,
  },
})
@Injectable()
export class UserState {
  /**
   * Selector to get users from the application state
   * @param state: the application state
   */
  @Selector()
  static CurrentUser(state: UserStateModel): User {
    return state.user;
  }

  @Action(Login)
  Login(
    { getState, patchState, setState }: StateContext<UserStateModel>,
    { payload }: Login
  ): void {
    const state = getState();
    setState({
      user: payload,
      });
    console.log('newState', state.user);

  }
  @Action(Logout)
  Logout(
    { getState, setState }: StateContext<UserStateModel>,
    { }: Logout
  ): void {
    const state = getState();
    if (state && state.user) {
      setState({
        user: {name : '' , password: ''} ,
      });
    }
  }
}
