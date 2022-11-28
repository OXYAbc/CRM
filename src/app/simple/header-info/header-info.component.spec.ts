import { DialogModule } from '@angular/cdk/dialog';
import { CdkMenuModule } from '@angular/cdk/menu';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

import { HeaderInfoComponent } from './header-info.component';
import { HeaderInfoModule } from './header-info.module';
@Injectable()
class LoginServiceMock {
  getUser() {
    return of();
  }
  logout() {}
}

describe('HeaderInfoComponent', () => {
  let component: HeaderInfoComponent;
  let fixture: ComponentFixture<HeaderInfoComponent>;
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderInfoComponent],
      imports: [HeaderInfoModule, DialogModule, CdkMenuModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: LoginService, useClass: LoginServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderInfoComponent);
    service = TestBed.inject(LoginService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call to logout in component', () => {
    const spyOnLogout = spyOn(component, 'logout');
    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    fixture.detectChanges();
    const btnLogout = document.querySelectorAll(
      '.menu-dropdown-item'
    )[1] as HTMLButtonElement;
    btnLogout.click();
    fixture.detectChanges();
    expect(spyOnLogout).toHaveBeenCalled();
  });
  it('should call to logout in service', () => {
    const spyOnService = spyOn(service, 'logout');
    component.logout();
    expect(spyOnService).toHaveBeenCalled();
  });
  it('should open dialog', () => {
    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    fixture.detectChanges();
    const btnOpenDialog = document.querySelectorAll(
      '.menu-dropdown-item'
    )[0] as HTMLButtonElement;
    btnOpenDialog.click();
    fixture.detectChanges();
    const dialogWindow = document.querySelector('app-user-dashboard');
    expect(dialogWindow).not.toBeUndefined();
  });
});
