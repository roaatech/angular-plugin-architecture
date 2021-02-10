import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string;

  public get user(): string {
   const userName=localStorage.getItem('user');
  return userName? userName:'';
  }

  constructor() { }

   login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
    localStorage.setItem('user',this.userName)
  }

  logout(): void {
    localStorage.removeItem('user')
  }
}
