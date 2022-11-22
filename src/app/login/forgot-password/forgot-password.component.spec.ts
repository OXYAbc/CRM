import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '../login.service';

import { ForgotPasswordComponent } from './forgot-password.component';
@Injectable()
class LoginServiceMock{

}

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let service: LoginService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      providers: [{provide: LoginService, useClass:LoginServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    service = TestBed.inject(LoginService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
