import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent{
  email: string = '';
  constructor(private loginService: LoginService) {}
  onSubmitRegister() {
    this.loginService.forgotPassword(this.email);
  }
}
