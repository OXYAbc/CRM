import { Component } from '@angular/core';
import { Project } from 'src/app/models/projects.model';
import { Task } from 'src/app/models/tasks.model';
import { ProjectsService } from '../projects/projects.service';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  projects: Project[] = [];
  tasks: Task[] = [];
  constructor(
    private projectsService: ProjectsService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.projectsService.project$.subscribe(
      (results) => (this.projects = results)
    );
    this.tasksService.tasks$.subscribe((results) => (this.tasks = results));
  }
}
