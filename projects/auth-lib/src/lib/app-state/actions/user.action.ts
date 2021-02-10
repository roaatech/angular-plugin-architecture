import { User } from "../models/User";
export class Login {
  static readonly type = "[User] Login";

  constructor(public payload: User) {}
}
export class Logout {
  static readonly type = "[User] Logout";

  constructor() {}
}