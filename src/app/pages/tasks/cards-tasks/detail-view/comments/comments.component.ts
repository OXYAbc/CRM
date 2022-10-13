import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  constructor(
    @Inject(DIALOG_DATA)
    public data: {
      comments: [{ user: string; comments: string }];
      itemID: number;
    }
  ) {}
}
