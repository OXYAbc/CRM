import { Component, Input } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-progress-cards',
  templateUrl: './progress-cards.component.html',
  styleUrls: ['./progress-cards.component.scss'],
})
export class ProgressCardsComponent {
  @Input() DataProjects: ProjectsData[] = [];
}
