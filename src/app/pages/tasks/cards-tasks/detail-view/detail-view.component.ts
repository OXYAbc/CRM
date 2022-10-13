import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';
import { CommentsComponent } from './comments/comments.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  @Input() detailData: TasksData | undefined;
  constructor(private dialog: Dialog) {}

  openDialog(): void {
    const idTask = this.detailData?.id;
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { comments: this.detailData?.comments, itemID: idTask },
    });
    // dialogRef.closed.subscribe(console.log);
  }
  openDialogEditTask(): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: this.detailData,
    });
    // dialogRef.closed.subscribe(console.log);
  }
  checkTask() {
    if (this.detailData != undefined) {
      this.detailData.check = true;
    } else {
      console.log('error check task :/');
    }
  }
  uncheckTask() {
    if (this.detailData != undefined) this.detailData.check = false;
  }
}
