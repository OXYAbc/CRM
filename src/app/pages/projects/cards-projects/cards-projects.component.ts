import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent {
  @Input() DataProjects: ProjectsData[] = [];
  @Input() SingleProjects: number | undefined;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'time',
    'viewMore',
  ];

  constructor(private route: ActivatedRoute) {}
  projectsDetail:ProjectsData | undefined;

  ShowDetails() {
    if (this.SingleProjects != undefined) {
      this.projectsDetail = this.DataProjects.find(
        (item) => item.id === this.SingleProjects
      );
      console.log(this.projectsDetail);
    }
  }
}
