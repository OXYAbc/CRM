import { Component, Inject, OnInit } from '@angular/core';
import {DIALOG_DATA} from '@angular/cdk/dialog';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  constructor(@Inject(DIALOG_DATA) public comments: [{user:string, comments: string}]) { }

  ngOnInit(): void {
  }

}
