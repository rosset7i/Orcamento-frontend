import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

import {LoginRequest} from "./models/login-request";
import {RegisterRequest} from "./models/register-request";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated = true;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  register(registerRequest: RegisterRequest): Observable<RegisterRequest> {
    return this.httpClient.post<RegisterRequest>(
      'https://localhost:7193/api/authentication/register',
      registerRequest);
  }

  login(loginRequest: LoginRequest): Observable<LoginRequest> {
    this.router.navigate(['perfil']);
    return this.httpClient.post<LoginRequest>(
      'https://localhost:7193/api/authentication/login',
      loginRequest);
  }
}
