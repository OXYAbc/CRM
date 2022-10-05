import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { UserData } from 'src/app/models/user.model';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

@Injectable()
class UserServiceMock {
  getData(): Observable<UserData[]> {
    return of([{
      userId: 1,
      firstName: "Krish",
      lastName: "Lee",
      phoneNumber: 123456,
      emailAddress: "krish.lee@learningcontainer.com",
      position: "Intern",
      departament:"Digital"
    }]);
  }
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [{ provide: UsersService, useClass: UserServiceMock }],
      declarations: [UsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabel in users Cards', () => {
    component.dataItem = [
      {
        userId: 1,
        firstName: 'Krish',
        lastName: 'Lee',
        phoneNumber: 123456,
        emailAddress: 'krish.lee@learningcontainer.com',
        position: 'Intern',
        departament: "Digital"
      },
    ];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBe(3);
  });
});
