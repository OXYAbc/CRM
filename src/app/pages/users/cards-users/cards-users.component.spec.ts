import { DialogModule } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { UsersService } from '../users.service';

import { CardsUsersComponent } from './cards-users.component';
import { CardsUsersModule } from './cards-users.module';

@Injectable()
class userServiceMock {
  addUser(user: User) {
    return true;
  }
}

describe('CardsUsersComponent', () => {
  let component: CardsUsersComponent;
  let fixture: ComponentFixture<CardsUsersComponent>;
  let service: UsersService;
  let user = new User({
    id: '1',
    firstName: 'Krish',
    lastName: 'Lee',
    phoneNumber: 123456,
    emailAddress: 'krish.lee@learningcontainer.com',
    position: 'Line Manager',
    departament: 'Digital',
    manager: 'Agata Janda',
    score: 5,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsUsersComponent],
      imports: [DialogModule, CardsUsersModule],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        { provide: UsersService, useClass: userServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsUsersComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open add task dialog', () => {
    const openSpy = spyOn(component, 'openAddtask');
    component.displaySearch = false;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.btn');
    btn.click();
    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();
  });
  it('should show search input', () => {
    component.toggleSearchButtonVisibility();
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    expect(search).toBeTruthy();
  });
  it('should show and hidden search input', () => {
    component.displaySearch = false;
    component.toggleSearchButtonVisibility();
    fixture.detectChanges();
    expect(component.displaySearch).toBe(true);
    let search = fixture.nativeElement.querySelector("input[name='task name']");
    expect(search).toBeFalsy();
    component.toggleSearchButtonVisibility();
    fixture.detectChanges();
    let searchtwo = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    expect(component.displaySearch).toBe(false);
    expect(searchtwo).toBeTruthy();
  });
  it('should called to show search func', () => {
    fixture.detectChanges();
    const buttonsSegment = fixture.nativeElement.querySelector('.card-buttons');
    const buttons = buttonsSegment.querySelectorAll('.btn');
    const buttonSerach = buttons[1];
    const searchShowSpy = spyOn(component, 'toggleSearchButtonVisibility');
    buttonSerach.click();
    fixture.detectChanges();
    expect(searchShowSpy).toHaveBeenCalled();
    expect(buttonSerach).toBeTruthy();
  });
  it('should called to getDetail', () => {
    const getDetailSpy = spyOn(component, 'onGetDetail');
    component.onGetDetail(user);
    fixture.detectChanges();
    expect(getDetailSpy).toHaveBeenCalledWith(user);
  });
  it('should call to addUser method', () => {
    const addUserSpy = spyOn(service, 'addUser');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    component.users = [user];
    const addBtn = buttons[0];
    addBtn.click();
    fixture.detectChanges();

    const submitBtn = document.querySelector(
      'button[type=submit]'
    ) as HTMLButtonElement;
    const dialogWindow = document.querySelector('.content-form');
    const inputs = dialogWindow?.querySelectorAll('input');
    const selects = dialogWindow?.querySelectorAll('select');
    const firstNameInput = inputs![0];
    const lastNameInput = inputs![1];
    const phoneInput = inputs![2];
    const departament = selects![0];
    const emailInput = inputs![3];
    const position = inputs![4];
    const manager = selects![1];

    firstNameInput.value = 'Adrian';
    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.value = 'Nowak';
    lastNameInput.dispatchEvent(new Event('input'));
    phoneInput.value = '789456123';
    phoneInput.dispatchEvent(new Event('input'));
    departament.value = 'Digital';
    departament.dispatchEvent(new Event('change'));
    emailInput.value = 'adrian@crm.pl';
    emailInput.dispatchEvent(new Event('input'));
    position.value = 'Intern';
    position.dispatchEvent(new Event('input'));
    manager.value = 'Krish Lee';
    manager.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    submitBtn.click();
    expect(addUserSpy).toHaveBeenCalled();
  });
});
