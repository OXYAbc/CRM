import { DialogModule } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { UsersService } from '../../users.service';
import { DataDetailViewComponent } from './data-detail-view.component';
import { DataDetailViewModule } from './data-detail-view.module';
@Injectable()
class userServiceMock {
  editUser(res: User) {
    true;
  }
  deleteTask(id: string) {
    return true;
  }
  updateScore(id: string, score: number) {
    return true;
  }
}

describe('DataDetailViewComponent', () => {
  let component: DataDetailViewComponent;
  let fixture: ComponentFixture<DataDetailViewComponent>;
  let service: UsersService;
  let users = [
    new User({
      id: '1',
      firstName: 'Julia',
      lastName: 'Wyka',
      phoneNumber: 123456,
      emailAddress: 'krish.lee@learningcontainer.com',
      position: 'Line Manager',
      departament: 'Digital',
      manager: 'Agata Janda',
      score: 5,
    }),
  ];
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
        { provide: UsersService, useClass: userServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataDetailViewComponent);
    component = fixture.componentInstance;
    component.user = user;
    component.users = users;
    service = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call to open dialog', () => {
    const dialogSpy = spyOn(component, 'openEditUserDialog');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonEdit = buttons[3];
    buttonEdit.click();
    component.openEditUserDialog();
    expect(dialogSpy).toHaveBeenCalled();
  });
  it('should call to mail to', () => {
    const mailto = spyOn(component, 'mailto');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonEdit = buttons[4];
    buttonEdit.click();
    expect(mailto).toHaveBeenCalled();
  });
  it('should call to mail to and return value', () => {
    const mailto = spyOn(component, 'mailto');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonEdit = buttons[4];
    buttonEdit.click();
    expect(mailto).toHaveBeenCalledWith('krish.lee@learningcontainer.com');
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
    const addScoreBtn = buttons[0];
    addScoreBtn.click();
    expect(addScore).toHaveBeenCalled();
  });
  it('should to add score', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const addScoreBtn = buttons[0];
    component.user!.score = 4;
    fixture.detectChanges();
    addScoreBtn.click();
    expect(component.user?.score).toBe(5);
  });
  it('should to call to addScore Method', () => {
    const updateScoreSpy = spyOn(service, 'updateScore');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const addScoreBtn = buttons[0];
    component.user!.score = 4;
    fixture.detectChanges();
    addScoreBtn.click();
    expect(component.user?.score).toBe(5);
    expect(updateScoreSpy).toHaveBeenCalled();
  });
  it('should to subtract score', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const subtractScoreBtn = buttons[1];
    component.user!.score = 5;
    fixture.detectChanges();
    subtractScoreBtn.click();
    expect(component.user?.score).toBe(4);
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
    component.user = user;
    component.user.score = 5;
    fixture.detectChanges();
    expect(tableInfo.textContent).toBe(
      'Departament:DigitalManager:Agata JandaPhone Number:123456Emial address:krish.lee@learningcontainer.comScore:Good Worker (5)'
    );
  });
  it('should called to edit user', () => {
    const editUserSpy = spyOn(service, 'editUser');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonEdit = buttons[3];
    buttonEdit.click();
    component.openEditUserDialog();
    fixture.detectChanges();

    const submitBtn = document.querySelector(
      'button[type=submit]'
    ) as HTMLButtonElement;
    const dialogWindow = document.querySelector('.content-form');
    const inputElements = dialogWindow?.querySelectorAll('input');
    let firstNameInput = inputElements![0];
    let lastNameInput = inputElements![1];
    let position = inputElements![2];
    let selects = dialogWindow?.querySelectorAll('select');
    let departament = selects![0];
    let phone = inputElements![3];
    let emial = inputElements![4];
    let manager = selects![1];

    firstNameInput.value = 'nazwa';
    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.value = 'nazwisko';
    lastNameInput.dispatchEvent(new Event('input'));
    position!.value = 'Intern';
    position!.dispatchEvent(new Event('input'));
    departament!.value = 'Digital';
    departament!.dispatchEvent(new Event('change'));
    phone.value = '789654123';
    phone.dispatchEvent(new Event('input'));
    emial.value = 'nazwa@crm.pl';
    emial.dispatchEvent(new Event('input'));
    manager.value = 'Julia Wyka';
    manager.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    fixture.detectChanges();
    submitBtn.click();
    expect(editUserSpy).toHaveBeenCalled();
    expect(editUserSpy).toHaveBeenCalledWith({
      firstName: 'nazwa',
      lastName: 'nazwisko',
      phoneNumber: '789654123',
      departament: 'Digital',
      emailAddress: 'nazwa@crm.pl',
      position: 'Intern',
      manager: 'Julia Wyka',
      id: '1',
    } as unknown as User);
  });
  it('should call to delete User method', () => {
    const deleteSpy = spyOn(service, 'deleteTask');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const deleteBtn = buttons[2];
    deleteBtn.click();
    fixture.detectChanges();
    const dialogWindow = document.querySelector('app-trash-component');

    const buttonsDialog = dialogWindow?.querySelectorAll('.btn');
    const acceptBtn = buttonsDialog![0] as HTMLButtonElement;
    acceptBtn.click();
    expect(deleteSpy).toHaveBeenCalledWith('1');
  });
});
