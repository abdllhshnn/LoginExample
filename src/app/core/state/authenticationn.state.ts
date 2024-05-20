import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AuthService} from "../service/auth.service";
import {AuthAction} from "./action/auth.action";
import {tap} from "rxjs";

export interface AuthenticationStateModel {
  token?: string;
  isAuthenticated: boolean;
}

@Injectable()
@State<AuthenticationStateModel>({
  name: 'AuthenticationState',
  defaults: {
    token:undefined,
    isAuthenticated: false
  },
})
export class AuthenticationState {
  constructor(private authService: AuthService) {
  }

  @Selector()
  public static getState(state: AuthenticationStateModel) {
    return state
  }

  @Selector()
  public static token({token}: AuthenticationStateModel) {
    return token
  }

  @Selector()
  public static isAuthenticated({isAuthenticated}: AuthenticationStateModel): boolean {
    return isAuthenticated;
  }

  @Action(AuthAction.Login)
  login({patchState}:StateContext<AuthenticationStateModel>, {login}:AuthAction.Login){
    return this.authService.login(login).pipe(
      tap(jwtToken =>{
        patchState({
          token: jwtToken,
          isAuthenticated:true
        })
      })
    )

  }
}
