import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AuthenticationService} from "../authentication.service";
import {LoginRequest} from "../models/login-request";
import {RegisterRequest} from "../models/register-request";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.form.value as RegisterRequest)
    this.authenticationService.login(this.form.value).subscribe(x => {
      console.log(x);
    });
  }
}
