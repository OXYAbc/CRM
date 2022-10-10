import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';
import { ProjectsData } from 'src/app/models/projects.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent {
  @Input() DataProjects: ProjectsData[] = [];
  @Input() SingleProjects: String | undefined;
  project!: ProjectsData;
  projectsDetail: ProjectsData | undefined;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'time',
    'viewMore',
  ];
  displayData = false;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private projectsService: ProjectsService
  ) {}

  ngAfterViewChecked() {

  }

  // UserService functions
  getProjectDetail(event: ProjectsData) {
    this.projectsService
      .getProject(event.id)
      .subscribe((response: ProjectsData) => (this.project = response));
    this.displayData = true;
  }
}
