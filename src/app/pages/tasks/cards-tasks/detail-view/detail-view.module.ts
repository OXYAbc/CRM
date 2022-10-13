import { NgModule } from '@angular/core';
import { DialogModule } from '@angular/cdk/dialog';
import { DetailViewComponent } from './detail-view.component';
import { EditTaskModule } from './edit-task/edit-task.module';
import { CommenstsModule } from './comments/comments.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [DialogModule, EditTaskModule, CommenstsModule, CommonModule],
  declarations: [DetailViewComponent],
  providers: [],
  exports: [DetailViewComponent],
})
export class DetailViewModule {}
