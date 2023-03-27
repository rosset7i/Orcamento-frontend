import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./authentication/login-form/login-form.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:'home', component: HomeComponent
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
