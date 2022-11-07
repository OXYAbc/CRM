import { DialogModule } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

import { CardsUsersComponent } from './cards-users.component';
import { CardsUsersModule } from './cards-users.module';
import { TableUsersModule } from './table-users/table-users.module';

describe('CardsUsersComponent', () => {
  let component: CardsUsersComponent;
  let fixture: ComponentFixture<CardsUsersComponent>;
  let user = new User({
    id: '1',
    firstName: 'Krish',
    lastName: 'Lee',
    phoneNumber: 123456,
    emailAddress: 'krish.lee@learningcontainer.com',
    position: 'Intern',
    departament: 'Digital',
    manager: 'Agata Janda', 
    score: 5
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsUsersComponent],
      imports: [DialogModule, CardsUsersModule],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open add task dialog',()=>{
    const openSpy = spyOn(component, 'openAddtask');
    component.displaySearch = false;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector(".btn");
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
    const buttonsSegment = fixture.nativeElement.querySelector(
      '.card-buttons'
    );
    const buttons = buttonsSegment.querySelectorAll('.btn');
    const buttonSerach = buttons[1];
    const searchShowSpy = spyOn(component, 'toggleSearchButtonVisibility');
    buttonSerach.click();
    fixture.detectChanges();
    expect(searchShowSpy).toHaveBeenCalled();
    expect(buttonSerach).toBeTruthy();
  });
  it("should called to getDetail", ()=>{
    const getDetailSpy = spyOn(component, 'onGetDetail');
    component.onGetDetail(user);
    fixture.detectChanges();
    expect(getDetailSpy).toHaveBeenCalledWith(user)
  })
});
