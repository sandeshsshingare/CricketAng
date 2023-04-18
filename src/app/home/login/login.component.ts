import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginregisterService } from '../loginregister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _loginregister: LoginregisterService) {}
  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginSubmit(data: any) {
    this._loginregister.authGuard(data);
  }
}
