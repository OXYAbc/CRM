import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProjectsComponent } from './cards-projects.component';

describe('CardsProjectsComponent', () => {
  let component: CardsProjectsComponent;
  let fixture: ComponentFixture<CardsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
