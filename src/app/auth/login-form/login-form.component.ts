import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.initFrom();
  }

  initFrom() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]]
    });
  }

  canSave() {
    return !this.form.valid;
  }

  save() {
    this.authenticationService.login(this.form.value)
      .subscribe(authResponse => {
        if (authResponse.token) {
          this.router.navigate(['main/perfil']);
        }
      });
  }
}
