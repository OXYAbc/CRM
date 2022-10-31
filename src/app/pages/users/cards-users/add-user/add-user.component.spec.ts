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
            useValue: [{
                id: '1',
                firstName: 'Krish',
                lastName: 'Lee',
                phoneNumber: 123456,
                emailAddress: 'krish.lee@learningcontainer.com',
                position: 'Intern',
                departament: 'Digital',
                manager: 'Jan Kowalski',
                score: 5,
            },]
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
});
