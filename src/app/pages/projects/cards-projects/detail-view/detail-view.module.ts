import { NgModule } from '@angular/core';
import { DialogModule } from '@angular/cdk/dialog';
import { DetailViewComponent } from './detail-view.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddProjectTaskModule } from './add-project-task/add-project-task.module';
import { AlertMessageModule } from 'src/app/shared/components/alert/alert-message.module';

@NgModule({
  imports: [DialogModule, CommonModule, DragDropModule, AddProjectTaskModule, AlertMessageModule],
  declarations: [DetailViewComponent],
  providers: [],
  exports: [DetailViewComponent],
})
export class DetailViewModule {}
