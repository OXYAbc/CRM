import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDetailLookComponent } from './cards-detail-look.component';

describe('CardsDetailLookComponent', () => {
  let component: CardsDetailLookComponent;
  let fixture: ComponentFixture<CardsDetailLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDetailLookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDetailLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
