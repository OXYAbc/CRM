import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsModule } from 'src/app/shared/card.module';

import { CardsDashboardComponent } from './cards-dashboard.component';
import { NotfCardsModule } from './notf-card/notf-card.module';
import { ProgressCardsModule } from './progress-cards/progress-cards.module';

describe('CardsDashboardComponent', () => {
  let component: CardsDashboardComponent;
  let fixture: ComponentFixture<CardsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsDashboardComponent],
      imports: [ProgressCardsModule, NotfCardsModule, CardsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
