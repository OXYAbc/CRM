import { Component, EventEmitter, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { TasksService } from '../../../tasks.service';
import { Comment } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  onsave = new EventEmitter<string>()
  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      comments: { user: string; comment: string }[];
      itemID: string;
      userName: string
    },
    private taskService: TasksService
  ) {
    data.comments = data.comments.filter((res) => res.user != null);
  }
  onSave(form :any){
    this.onsave.emit(form)
  }
}
