import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";
import {JWTTokenModel, LoginModel} from "../model/login.model";
import {RegisterModel} from "../model/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = `${environment.APIURL}`;

  constructor(private http: HttpClient) {
  }

  login(user:LoginModel): Observable<any> {
    return this.http.post<JWTTokenModel>(`${this.path}/login`,user)
  }

  register(user:RegisterModel){
    return this.http.post(`${this.path}/register`,user)
  }

}
