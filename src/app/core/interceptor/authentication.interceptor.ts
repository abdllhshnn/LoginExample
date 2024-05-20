import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Store} from "@ngxs/store";
import {AuthenticationState} from "../state/authenticationn.state";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private store:Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.store.selectSnapshot(AuthenticationState.token)

    const headers = request.clone({setHeaders: {Authorization: `Bearer ${token}`}});

    return next.handle(headers);
  }
}
