import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Task, Comment } from 'src/app/models/tasks.model';
import { TasksService } from '../../tasks.service';
import { CommentsComponent } from './comments/comments.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  @Input() task?: Task;
  constructor(private dialog: Dialog, private taskService: TasksService) {}

  onOpenCommnentsDialog(): void {
    const idTask = this.task?.id;
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { comments: this.task?.comments, itemID: idTask },
    });
    dialogRef.closed.subscribe((result) => {
      if (result != undefined) {
        this.task?.comments.push(result as Comment)
        this.taskService.addComment(this.task?.comments as Comment[], idTask as string);
      }
    });
  }
  onOpenDialogEditTask(): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      data: this.task,
    });
    dialogRef.closed.subscribe((result) => {
      if (result != undefined) {
        this.taskService.editTask(result);
      }
    });
  }
  checkTask() {
    if (this.task) {
      this.taskService.checkTask(this.task.id);
    } else {
      console.log('error check task :/');
    }
  }
  uncheckTask() {
    if (this.task) {
      this.taskService.uncheckTask(this.task.id);
    } else {
      console.log('error check task :/');
    }
  }
  deleteTask() {
    if(this.task){
      this.taskService.deleteTask(this.task.id);
    }
  }
}
