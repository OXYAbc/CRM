import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NotfCardComponent } from './notf-card.component';

@NgModule({
  imports: [CdkTableModule, CommonModule, RouterModule, TableModule],
  declarations: [NotfCardComponent],
  exports: [NotfCardComponent],
  providers: [],
})
export class NotfCardsModule {}
