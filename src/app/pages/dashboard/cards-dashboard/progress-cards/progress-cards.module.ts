import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProgressCardComponent } from './progress-cards.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProgressCardComponent],
  exports: [ProgressCardComponent],
  providers: [],
})
export class ProgressCardsModule {}
