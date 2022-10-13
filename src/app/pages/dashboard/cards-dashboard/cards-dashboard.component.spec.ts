import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDashboardComponent } from './cards-dashboard.component';
import { NotfCardComponent } from './notf-card/notf-card.component';
import { ProgressCardsComponent } from './progress-cards/progress-cards.component';

describe('CardsDashboardComponent', () => {
  let component: CardsDashboardComponent;
  let fixture: ComponentFixture<CardsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardsDashboardComponent,
        ProgressCardsComponent,
        NotfCardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
