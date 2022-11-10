import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableUsersComponent } from './table-users.component';
import { TableUsersModule } from './table-users.module';

describe('TableUsersComponent', () => {
  let component: TableUsersComponent;
  let fixture: ComponentFixture<TableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUsersComponent],
      imports: [TableUsersModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableUsersComponent);
    component = fixture.componentInstance;
    component.users = [
      {
        id: '1',
        firstName: 'Krish',
        lastName: 'Lee',
        phoneNumber: 123456,
        emailAddress: 'krish.lee@learningcontainer.com',
        position: 'Intern',
        departament: 'Digital',
        manager: 'Jan Kowalski',
        score: 5,
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should creat buttons in list in table', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
  it('should call to get details', () => {
    expect(component).toBeTruthy();
    const btn = fixture.nativeElement.querySelector('.btn');
    const detailSpy = spyOn(component, 'showDetails');
    btn.click();
    expect(detailSpy).toHaveBeenCalled();
  });
  it('check value of click "show-more"', () => {
    const btn = fixture.nativeElement.querySelector('.btn');
    spyOn(component.userEmitter, 'emit');
    btn.click();
    expect(component.userEmitter.emit).toHaveBeenCalledWith(component.users[0]);
  });
});
