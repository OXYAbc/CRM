import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  projects: Project[] = [];
  constructor(private cardService: ProjectsService) {}

  ngOnInit(): void {
    this.cardService.project$.subscribe((results) => (this.projects = results));
  }
}
