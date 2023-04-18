import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginregisterService {
  constructor(private _http: HttpClient, private _route: Router) {
    this.getdata();
    console.log(this.user);
  }

  user: any = [];
  registerData(data: any) {
    alert('Data Stored succefully, registered');
    this.user.push(data);
    this.getdata();
    return this._http.put(
      'https://cricket-14d0b-default-rtdb.firebaseio.com/team.json',
      this.user
    );
  }
  getdata(): any {
    this._http
      .get('https://cricket-14d0b-default-rtdb.firebaseio.com/team.json')
      .subscribe((res: any) => {
        if (res) {
          this.user = res;
        }
      });
    return this.user;
  }
  authLogin: boolean = false;

  authGuard(data: any): any {
    for (let i = 0; i < this.user.length; i++) {
      if (
        this.user[i].email == data.email &&
        this.user[i].password == data.password
      ) {
        // alert('matched');
        console.log(this.user[i]);
        this.authLogin = true;

        this._route.navigateByUrl('auth/authhome');
        this.isLogintoApp();
        return '';
      } else {
        // console.log(this.user[0].email, this.user[0].password);
        // console.log(data.email, data.password);
        console.log('false');

        this.authLogin = false;
        this.isLogintoApp();

        // alert('not');
      }
    }
    if (this.authLogin === false) {
      alert('you are not allowed');
    }
  }

  isLogintoApp() {
    return this.authLogin;
  }
}
