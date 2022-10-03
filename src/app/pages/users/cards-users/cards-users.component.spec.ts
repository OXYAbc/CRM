import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsUsersComponent } from './cards-users.component';

describe('CardsUsersComponent', () => {
  let component: CardsUsersComponent;
  let fixture: ComponentFixture<CardsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsUsersComponent ],
      imports: [CdkTableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
