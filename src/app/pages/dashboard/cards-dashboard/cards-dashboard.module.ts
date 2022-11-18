import { NgModule } from '@angular/core';
import { CardsModule } from 'src/app/shared/cards.module';
import { CardsDashboardComponent } from './cards-dashboard.component';
import { NotfCardModule } from './notf-card/notf-card.module';
import { ProgressCardsModule } from './progress-cards/progress-cards.module';

@NgModule({
  imports: [ProgressCardsModule, NotfCardModule, CardsModule],
  declarations: [CardsDashboardComponent],
  exports: [CardsDashboardComponent],
  providers: [],
})
export class CardsDashboardModule {}
