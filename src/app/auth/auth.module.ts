import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {AuthRoutingModule} from './auth-routing.module';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {AuthenticationService} from "./authentication.service";
import {AuthComponent} from './auth.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthModule {
}
