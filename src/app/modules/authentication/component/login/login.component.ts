import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Select, State, Store} from "@ngxs/store";
import {AuthAction} from "../../../../core/state/action/auth.action";
import {JWTTokenModel, LoginModel} from "../../../../core/model/login.model";
import {AuthenticationState} from "../../../../core/state/authenticationn.state";
import {Observable} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Select(AuthenticationState.token) token$!:Observable<JWTTokenModel>

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  constructor(private store:Store) {
    this.token$.subscribe(x=>console.log(x))
  }
  onSubmit(){
    this.store.dispatch(new AuthAction.Login({...this.loginForm.value}));
  }
}
