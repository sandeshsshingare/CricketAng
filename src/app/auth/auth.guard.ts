import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginregisterService } from '../home/loginregister.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _loginregister: LoginregisterService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._loginregister.authLogin) {
      console.log(this._loginregister.authLogin);

      return true;
    } else {
      console.log(this._loginregister.authLogin);

      return false;
    }
  }
}
