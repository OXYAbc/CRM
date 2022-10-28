import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { Project } from 'src/app/models/projects.model';

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.scss'],
})
export class CardsDashboardComponent {
  @Input() projects: Project[] = [];
  @Input() tasks: Task[] = [];

}
