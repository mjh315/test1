import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/Requests/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: LoginRequest;

  constructor() { 
    this.user= new LoginRequest;
  }

  ngOnInit(): void {
  }
  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }



  



}
