import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../models/login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
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
    alert('Login: a@crm.sii | password: admin123');
  }
  constructor(private loginService: LoginService, private route: Router) {}

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
