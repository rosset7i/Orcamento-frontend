import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {LoginRequest} from "./models/login-request";
import {RegisterRequest} from "./models/register-request";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  register(registerRequest: RegisterRequest): Observable<RegisterRequest> {
    return this.httpClient.post<RegisterRequest>(
      'https://localhost:44332/api/authentication/register',
      registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<LoginRequest> {
    return this.httpClient.post<LoginRequest>(
      'https://localhost:44332/api/authentication/login',
      loginRequest);
  }
}
