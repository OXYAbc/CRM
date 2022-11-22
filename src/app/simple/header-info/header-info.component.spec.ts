import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/login/login.service';

import { HeaderInfoComponent } from './header-info.component';
import { HeaderInfoModule } from './header-info.module';
@Injectable()
class LoginServiceMock{

}

describe('HeaderInfoComponent', () => {
  let component: HeaderInfoComponent;
  let fixture: ComponentFixture<HeaderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderInfoComponent],
      imports: [HeaderInfoModule],
      providers: [{provide: LoginService, useClass:LoginServiceMock}]

    }).compileComponents();

    fixture = TestBed.createComponent(HeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
