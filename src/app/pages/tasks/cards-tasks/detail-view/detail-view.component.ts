import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { Task, Comment } from 'src/app/models/tasks.model';
import { AlertMessageComponent } from 'src/app/shared/components/alert/alert-message.component';
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
  private userName: string = '';
  constructor(private dialog: Dialog, private taskService: TasksService, private loginService: LoginService) {
    this.loginService.getUser().pipe(map(user => user?.displayName)).subscribe((res)=> this.userName = res)
  }
  
  onOpenCommnentsDialog(): void {
    const idTask = this.task?.id;
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { comments: this.task?.comments, itemID: idTask, userName:  this.userName},
    });
    dialogRef.componentInstance?.onsave.subscribe((result) => {
      if (result != undefined) {
        this.task?.comments.push(result as unknown as Comment);
        this.taskService.addComment(
          this.task?.comments as Comment[],
          idTask as string
        );
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
    const dialogRef = this.dialog.open(AlertMessageComponent, {
      data: { type: 'task' },
    });
    dialogRef.closed.subscribe((res) => {
      if (res) {
        this.taskService.deleteTask(this.task!.id);
      }
    });
  }
}
