import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { AddUserModule } from './add-user.module';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [AddUserModule],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
        {
          provide: DIALOG_DATA,
          useValue: [
            {
              id: '1',
              firstfirstName: 'Krish',
              lastfirstName: 'Lee',
              phoneNumber: 123456,
              emailAddress: 'krish.lee@learningcontainer.com',
              position: 'Intern',
              departament: 'Digital',
              manager: 'Jan Kowalski',
              score: 5,
            },
          ],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });
  it('firstName field validity', () => {
    let firstName = component.userForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
  });
  it('firstName field validity', () => {
    let errors = {};
    let firstName = component.userForm.controls['firstName'];
    firstName.setValue('test');
    fixture.detectChanges();
    errors = firstName.errors || {};
    expect(errors).toBeTruthy();
  });
  it('submitting a form emits a task', () => {
    expect(component.userForm.valid).toBeFalsy();
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    component.userForm.controls['firstName'].setValue('nazwa');
    component.userForm.controls['lastName'].setValue('nazwsiko');
    component.userForm.controls['phoneNumber'].setValue(789456123);
    component.userForm.controls['departament'].setValue('Digital');
    component.userForm.controls['emailAddress'].setValue('nazwa@crm.pl');
    component.userForm.controls['position'].setValue('Intern');
    component.userForm.controls['manager'].setValue('Julia Wyka');

    fixture.detectChanges();
    const submitSpy = spyOn(component, 'onSubmit');
    expect(component.userForm.valid).toBeTruthy();
    submitBtn.click();
    expect(submitSpy).toHaveBeenCalled();
  });
});
