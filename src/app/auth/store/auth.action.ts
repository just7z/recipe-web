import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const SIGNUP = '[Auth] SignUp';

export type AuthActions = Login | Logout | SignUp;

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {}
}

export class SignUp implements Action {
  readonly type = SIGNUP;
}
