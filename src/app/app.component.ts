import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginregisterService } from './home/loginregister.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, OnInit {
  title = 'CricketTeam';
  isLogin: boolean = this._loginregister.isLogintoApp();
  constructor(private _loginregister: LoginregisterService) {}
  ngOnChanges(changes: SimpleChanges): void {
    // this.isLogin = this._loginregister
  }

  ngOnInit(): void {
    // this.isLogin = this._loginregister.authLogin;
    console.log(this.isLogin);
  }
  isLoginfun(){
    
  }
  isLogoutfun(){

  }
}
