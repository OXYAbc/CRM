import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private tasksCardsService: TasksService) {}

  ngOnInit(): void {
    this.tasksCardsService.tasks$.subscribe((tasks) => (this.tasks = tasks));
  }
}
