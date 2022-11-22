import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckStage } from 'src/app/@theme/app-check-stage.directive';
import { TitleProgress } from 'src/app/@theme/app-title-progress.directive';
import { ProgressCardComponent } from './progress-cards.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProgressCardComponent, CheckStage, TitleProgress],
  exports: [ProgressCardComponent],
  providers: [],
})
export class ProgressCardsModule {}
