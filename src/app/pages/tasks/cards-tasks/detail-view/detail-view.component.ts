import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';
import { TasksService } from '../../tasks.service';
import { CommentsComponent } from './comments/comments.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  @Input()
  detailData!: TasksData;
  constructor(private dialog: Dialog, private taskService: TasksService) {}

  openDialog(): void {
    const idTask = this.detailData?.id;
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { comments: this.detailData?.comments, itemID: idTask },
    });
  }
  openDialogEditTask(): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: this.detailData,
    });
  }
  checkTask() {
  }
  uncheckTask() {
  }
}
