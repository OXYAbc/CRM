import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent{
  email: string = '';
  sentMail: boolean = false;
  constructor(private dialogRef: DialogRef<string>) {}
  onSubmitRestPass() {
    this.sentMail = true;
  }

}
