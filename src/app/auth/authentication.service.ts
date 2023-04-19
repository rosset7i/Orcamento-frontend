import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {LoginRequest} from "./models/login-request";
import {RegisterRequest} from "./models/register-request";
import {LoginResponse} from "./models/login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated = true;

  constructor(private httpClient: HttpClient) {
  }

  register(registerRequest: RegisterRequest): Observable<RegisterRequest> {
    return this.httpClient.post<RegisterRequest>(
      'https://localhost:7193/api/authentication/register',
      registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      'https://localhost:7193/api/authentication/login',
      loginRequest);
  }
}
