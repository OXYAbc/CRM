import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { Login, Logout } from "./login.action";

@State({
    name: 'login',
    defaults: {
      loggedIn: false,
      user: null
    }
  })
  @Injectable()
  export class UserState {
    @Action(Login)
    login({ patchState }: StateContext<any>, action: Login) {
      patchState({
        loggedIn: true,
        user: action.user
      });
    }
  
    @Action(Logout)
    logout({ patchState }: StateContext<any>) {
      patchState({
        loggedIn: false,
        user: null
      });
    }
  }