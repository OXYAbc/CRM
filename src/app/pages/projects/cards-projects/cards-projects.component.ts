import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent {
  @Input() DataProjects: Project[] = [];
  @Input() SingleProjects: String | undefined;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'time',
    'viewMore',
  ];
  displayDetails = false;

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) {}
  projectsDetail: Project | undefined;

  showMore(data: Project) {
    this.projectsDetail = data;
    this.displayDetails = true;
    console.log(this.projectsDetail);
  }

  ngAfterViewChecked() {
    if (this.SingleProjects != undefined) {
      this.displayDetails = true;
      this.projectsDetail = this.DataProjects.find(
        (item) => item.id === this.SingleProjects
      );
    }
    this.cd.detectChanges();
  }
}
