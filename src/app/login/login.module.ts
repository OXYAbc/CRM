import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { CardsModule } from '../shared/card.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ForgotPassModule } from './forgot-password/forgot-password.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CardsModule, FormsModule, CommonModule, AngularFireModule, ForgotPassModule],
  providers: [LoginService],
  exports: [LoginComponent],
})
export class LoginModule {}
