import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsProjectsViewComponent } from './cards-projects-view.component';

describe('CardsProjectsViewComponent', () => {
  let component: CardsProjectsViewComponent;
  let fixture: ComponentFixture<CardsProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProjectsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
