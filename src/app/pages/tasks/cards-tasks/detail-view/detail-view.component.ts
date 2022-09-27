import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  @Input() detailData : TasksData | undefined;
  constructor(private dialog: Dialog ) {}

  ngOnInit(): void {
  }
  openDialog():void {
    const dialogConfig = new DialogConfig();
    const idTask = this.detailData?.name;
    console.log(idTask);
    dialogConfig.data = this.detailData?.discription;
    const dialogRef = this.dialog.open(CommentsComponent, {data: this.detailData?.comments});
    dialogRef.closed.subscribe(console.log);
  }
  

}
