import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotfCardComponent } from './notf-card.component';

@NgModule({
  imports: [CdkTableModule, CommonModule],
  declarations: [NotfCardComponent],
  exports: [NotfCardComponent],
  providers: [],
})
export class NotfCardModule {}
