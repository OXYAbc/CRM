import { NgModule } from '@angular/core';
import { CardsTasksComponent } from './cards-tasks.component';
import { DialogModule } from '@angular/cdk/dialog';
import { DetailViewModule } from './detail-view/detail-view.module';
import { CommonModule } from '@angular/common';
import { ControlPanelModule } from './control-panel/add-task.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CardsModule } from 'src/app/shared/card.module';

@NgModule({
  imports: [
    DialogModule,
    DetailViewModule,
    CommonModule,
    ControlPanelModule,
    FormsModule,
    TableModule,
    CardsModule,
  ],
  declarations: [CardsTasksComponent],
  providers: [],
  exports: [CardsTasksComponent],
})
export class CardsTasksModule {}
