import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/login/login.service';
import { HeaderInfoComponent } from 'src/app/simple/header-info/header-info.component';
import { HeaderInfoModule } from 'src/app/simple/header-info/header-info.module';

import { HeaderComponent } from './header.component';
@Injectable()
class LoginServiceMock{

}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInfoModule],
      declarations: [HeaderComponent],
      providers: [{provide: LoginService, useClass:LoginServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
