import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LoginregisterService } from '../home/loginregister.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(
    private _http: HttpClient,
    private _loginregister: LoginregisterService
  ) {}

  player: [] = [];
  ngOnInit(): void {}
  getlist() {
    return (this.player = this._loginregister.getdata());
    // console.log(this.player);
  }
}
