import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersComponent } from './table-users.component';
import { TableUsersModule } from './table-users.module';

describe('TableUsersComponent', () => {
  let component: TableUsersComponent;
  let fixture: ComponentFixture<TableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUsersComponent ], imports:[TableUsersModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});