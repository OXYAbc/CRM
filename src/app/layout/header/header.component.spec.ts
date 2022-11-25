import { DialogModule } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { HeaderInfoModule } from 'src/app/simple/header-info/header-info.module';

import { HeaderComponent } from './header.component';
@Injectable()
class LoginServiceMock {
  getUser() {
    return of();
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInfoModule, DialogModule],
      declarations: [HeaderComponent],
      providers: [{ provide: LoginService, useClass: LoginServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
