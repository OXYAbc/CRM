import { NgModule } from '@angular/core';
import { CardsModule } from 'src/app/shared/card.module';
import { CardsDashboardComponent } from './cards-dashboard.component';
import { NotfCardsModule } from './notf-card/notf-card.module';
import { ProgressCardsModule } from './progress-cards/progress-cards.module';

@NgModule({
  imports: [ProgressCardsModule, NotfCardsModule, CardsModule],
  declarations: [CardsDashboardComponent],
  exports: [CardsDashboardComponent],
  providers: [],
})
export class CardsDashboardModule {}
