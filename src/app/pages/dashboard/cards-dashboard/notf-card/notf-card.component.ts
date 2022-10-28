import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject, last, Observable } from 'rxjs';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-notf-card',
  templateUrl: './notf-card.component.html',
  styleUrls: ['./notf-card.component.scss'],
})
export class NotfCardComponent{
  private _tasks!: Task[]
  @Input()
  get tasks(): Task[] {
    return this._tasks;
  }
  set tasks(tasks:Task[]){
    const date = new Date();
    date.setDate(date.getDate() - 5);
    const dateLastDays = date.toJSON().slice(0, 10) as unknown as Date;
    this._tasks = tasks.filter(
      (res) => (res.added as unknown as Date) > dateLastDays
    );
  }
  displayedColumns: string[] = ['title', 'discription', 'viewMore'];

}
