import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginregisterService } from '../loginregister.service';
import { Router } from '@angular/router';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private _loginregister: LoginregisterService,
    private _route: Router
  ) {}
  category: Category[] = [
    { value: 'Batsman', viewValue: 'Batsman' },
    { value: 'Bowler', viewValue: 'Bowler' },
    { value: 'Wicket Kipper', viewValue: 'Wicket Kipper' },
    { value: 'All Rounder', viewValue: 'All Rounder' },
  ];
  registerform = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    category: new FormControl(''),
    jersy: new FormControl(''),
    password: new FormControl(''),
  });

  registerSubmit(rdata: any) {
    this._loginregister.registerData(rdata).subscribe((data) => {
      console.log(data);
      this._loginregister.getdata();
      this._route.navigateByUrl('home/login');
    });

    console.log(rdata);
  }
}
