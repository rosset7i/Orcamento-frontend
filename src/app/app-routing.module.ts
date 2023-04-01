import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./authentication/login-form/login-form.component";
import {RegisterFormComponent} from "./authentication/register-form/register-form.component";

const routes: Routes = [
  {
    path:'register', component: RegisterFormComponent
  },
  {
    path:'login', component: LoginFormComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
