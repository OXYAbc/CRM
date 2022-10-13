import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressCardsComponent } from './progress-cards.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProgressCardsComponent],
  exports: [ProgressCardsComponent],
  providers: [],
})
export class ProgressCardsModule {}
