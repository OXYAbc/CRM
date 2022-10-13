import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsUsersComponent } from './cards-users.component';
import { CardsUsersModule } from './cards-users.module';

describe('CardsUsersComponent', () => {
  let component: CardsUsersComponent;
  let fixture: ComponentFixture<CardsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsUsersComponent],
      imports: [CardsUsersModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
