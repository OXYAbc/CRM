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
  projectData!: ProjectsData;
  // projectsDetail: ProjectsData | undefined;
  name!: String;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'time',
    'viewMore',
  ];
  displayData = false;
  displaySearch = false;
  isLoading = true;




  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private projectsService: ProjectsService
  ) {}

  ngAfterViewChecked() {

  }
  ShowSearch() {
    this.displaySearch = !this.displaySearch;
    this.projectsService.getData();
  }

  // UserService functions
  getProjectDetail(event: ProjectsData) {
    this.projectsService
      .getProject(event.id)
      .subscribe((response: ProjectsData) => this.projectData = response);
    this.displayData = true;
    console.log(event)
  }
  search() {
    this.isLoading = true;
    this.DataProjects = this.DataProjects.filter((res) => {
      if (!this.DataProjects || !this.name) {
        this.projectsService.getData().subscribe((results) => {
          this.DataProjects = results;
          console.log(results);
        });
      } else {
        (error: any) => console.log(error);
      }
      return res.name
        .toLocaleLowerCase()
        .match(this.name.toLocaleLowerCase());
    });
  }
}
