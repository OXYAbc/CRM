import { DialogModule } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

import { DataDetailViewComponent } from './data-detail-view.component';
import { DataDetailViewModule } from './data-detail-view.module';

describe('DataDetailViewComponent', () => {
  let component: DataDetailViewComponent;
  let fixture: ComponentFixture<DataDetailViewComponent>;
  let user = new User({
    id: '1',
    firstName: 'Krish',
    lastName: 'Lee',
    phoneNumber: 123456,
    emailAddress: 'krish.lee@learningcontainer.com',
    position: 'Intern',
    departament: 'Digital',
    manager: 'Agata Janda',
    score: 5,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataDetailViewComponent],
      imports: [DialogModule, DataDetailViewModule],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataDetailViewComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call to open dialog', () => {
    const dialogSpy = spyOn(component, 'openEditUserDialog');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonComments = buttons[3];
    buttonComments.click();
    component.openEditUserDialog();
    expect(dialogSpy).toHaveBeenCalled();
  });
  it('should call to mail to', () => {
    const mailto = spyOn(component, 'mailto');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonComments = buttons[4];
    buttonComments.click();
    expect(mailto).toHaveBeenCalled();
  });
  it('should call to scorelevel with opinion Good Worker', () => {
    const scoreLevel = spyOn(component, 'scoreLevel').and.returnValue(
      'Good Worker'
    );
    component.user = user;
    fixture.detectChanges();
    expect(scoreLevel).toHaveBeenCalled();
  });
  it('should call to scorelevel with opinion Sufficient', () => {
    const scoreLevel = spyOn(component, 'scoreLevel').and.returnValue(
      'Sufficient'
    );
    component.user = new User({
      id: '1',
      firstName: 'Krish',
      lastName: 'Lee',
      phoneNumber: 123456,
      emailAddress: 'krish.lee@learningcontainer.com',
      position: 'Intern',
      departament: 'Digital',
      manager: 'Agata Janda',
      score: -5,
    });
    fixture.detectChanges();
    expect(scoreLevel).toHaveBeenCalled();
  });
  it('should call to add score', () => {
    const addScore = spyOn(component, 'addScore');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonComments = buttons[0];
    buttonComments.click();
    expect(addScore).toHaveBeenCalled();
  });
  it('should render user name and surname', () => {
    const nameSurname = fixture.nativeElement.querySelector('h2');
    expect(nameSurname.textContent).toBe('Krish Lee');
  });
  it('should render user position', () => {
    const namePosition = fixture.nativeElement.querySelector('p');
    expect(namePosition.textContent).toBe('Intern');
  });
  it('should render tab with info about user', () => {
    const tableInfo = fixture.nativeElement.querySelector('table');
    expect(tableInfo.textContent).toBe('Departament:DigitalManager:Agata JandaPhone Number:123456Emial address:krish.lee@learningcontainer.comScore:Good Worker (5)');
  });
});
