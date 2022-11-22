import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../models/login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSignedIn: boolean = false;
  formLogin: LoginForm = {
    email: '',
    password: '',
  };
  formSingup: LoginForm = {
    email: '',
    password: '',
  };
  isLoading: boolean = false;
  ngOnInit(): void {
    if (sessionStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  constructor(private loginService: LoginService) {}

  onSubmitLogin() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.loginService.login(this.formLogin.email, this.formLogin.password);
    this.isLoading = false;
  }
  onSubmitRegister() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.loginService.register(this.formSingup.email, this.formSingup.password);
    this.isLoading = false;
  }
}
