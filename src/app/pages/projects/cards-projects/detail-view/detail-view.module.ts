import { NgModule } from '@angular/core';
import { DialogModule } from '@angular/cdk/dialog';
import { DetailViewComponent } from './detail-view.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddProjectTaskModule } from './add-project-task/add-project-task.module';
import { TrashAlertComponent } from './trash-alert.component';

@NgModule({
  imports: [DialogModule, CommonModule, DragDropModule, AddProjectTaskModule],
  declarations: [DetailViewComponent, TrashAlertComponent],
  providers: [],
  exports: [DetailViewComponent],
})
export class DetailViewModule {}
