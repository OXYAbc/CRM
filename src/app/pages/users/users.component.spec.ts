import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [],
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
