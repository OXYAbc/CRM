import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async } from '@firebase/util';
import { CardsModule } from 'src/app/shared/card.module';

import { UserDashboardComponent } from './user-dashboard.component';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  let user = {
    displayName: 'data',
    phoneNumber: 'data',
    emailAddress: 'data',
    photoURL: 'data',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDashboardComponent],
      imports: [FormsModule, ReactiveFormsModule, CardsModule],
      providers: [{ provide: DIALOG_DATA, useValue: { user } }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    component.userForm = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change view', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.userEdit).toBeTrue();
  });
  it('should send value view',  fakeAsync(() => {
    component.userForm = user;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );

    component.userEditForm.controls['displayName'].setValue('nazwa');
    component.userEditForm.controls['phoneNumber'].setValue('789456123');
    component.userEditForm.controls['emailAddress'].setValue('nazwa@crm.pl');
    component.userEditForm.controls['photoURL'].setValue(
      'https://fajnepodroze.pl/wp-content/webp-express/webp-images/uploads/2020/04/kajman-680x452.jpg.webp'
    );
    fixture.detectChanges();

    const submitSpy = spyOn(component, 'onSaveShanges');
    submitBtn.click();
    fixture.detectChanges();
    expect(component.userEditForm.valid).toBeTruthy();
    expect(submitSpy).toHaveBeenCalled();

  }));
});
