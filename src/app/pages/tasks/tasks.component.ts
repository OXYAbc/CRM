import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  dataItem: Task[] = [];
  constructor(private tasksCardsService: TasksService) {}

  ngOnInit(): void {
    this.tasksCardsService.tasks$.subscribe((items) => {
      this.dataItem = items;
    });
  }
}
