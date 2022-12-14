import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { User } from 'src/app/models/user.model';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

@Injectable()
class UserServiceMock {
  users$: Observable<User[]> = of([
    new User({
      id: '1',
      firstName: 'Ada',
      lastName: 'Mock',
      phoneNumber: 987456321,
      emailAddress: 'krish.lee@learningcontainer.com',
      position: 'Intern',
      departament: 'Digital',
      manager: 'Krystyna Janda',
      score: 5,
      organization: '10'
    }),
  ]);
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let service: UsersService;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [{ provide: UsersService, useClass: UserServiceMock }],
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    service = TestBed.inject(UsersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load data from service', () => {
    let results: User[] = [];
    service.users$.subscribe((res) => {
      results = res;
    });
    expect(component.users).toBe(results);
  });
});
