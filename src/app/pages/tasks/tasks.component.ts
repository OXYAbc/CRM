import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  idItem!: string;
  constructor(
    private tasksCardsService: TasksService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.idItem = params['id'];
    });
  }

  ngOnInit(): void {
    this.tasksCardsService.tasks$.subscribe((items) => {
      this.tasks = items;
    });
  }
}
