import {LoginModel} from "../../model/login.model";
import {RegisterModel} from "../../model/register.model";

export namespace AuthAction {
  export class Login {
    static readonly type = '[AUTH] login'

    constructor(public login: LoginModel) {
    }
  }

  export class Register {
    static readonly type = '[AUTH] register'

    constructor(public register: RegisterModel) {
    }
  }

}
