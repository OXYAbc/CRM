import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { User } from 'src/app/models/user.model';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const userServices: UsersService = jasmine.createSpyObj('UserServices', ['users$']);
  userServices.user$ = of([new User({
    id: '1',
    firstName: 'Krish',
    lastName: 'Lee',
    phoneNumber: 123456,
    emailAddress: 'krish.lee@learningcontainer.com',
    position: 'Intern',
    departament: 'Digital',
    manager: 'Agata Janda', 
    score: 5
  })])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [{ provide: UsersService, useValue: userServices}],
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
