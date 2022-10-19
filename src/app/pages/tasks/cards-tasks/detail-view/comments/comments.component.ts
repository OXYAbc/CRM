import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { TasksService } from '../../../tasks.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      comments: { user: string; comment: string }[];
      itemID: string;
    },
    private taskService: TasksService
  ) {}
  addCommentFromForm(event: any) {
    this.data.comments.push(event)
    this.taskService.addComment(this.data.comments, this.data.itemID)
    console.log(event)
    console.log(this.data.comments)
  }
}
