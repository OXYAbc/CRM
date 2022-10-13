import { NgModule } from '@angular/core';
import { CardsTasksComponent } from './cards-tasks.component';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { DetailViewModule } from './detail-view/detail-view.module';
import { CommonModule } from '@angular/common';
import { ControlPanelModule } from './control-panel/control-panel.module';

@NgModule({
  imports: [
    DialogModule,
    CdkTableModule,
    DetailViewModule,
    CommonModule,
    ControlPanelModule,
  ],
  declarations: [CardsTasksComponent],
  providers: [],
  exports: [CardsTasksComponent],
})
export class CardsTasksModule {}
