import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTasksComponent } from './cards-tasks.component';

describe('CardsTasksComponent', () => {
  let component: CardsTasksComponent;
  let fixture: ComponentFixture<CardsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
