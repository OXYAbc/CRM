import { Dialog } from '@angular/cdk/dialog';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';
import { ProjectsData } from 'src/app/models/projects.model';
import { ProjectsService } from '../projects.service';
// import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent {
  @Input() DataProjects: ProjectsData[] = [];
  @Input() SingleProjects: String | undefined;
  projectData: any;
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
    private projectsService: ProjectsService,
    public dialog: Dialog
  ) {}

  ngAfterViewChecked() {

  }
  ShowSearch() {
    this.displaySearch = !this.displaySearch;
    this.projectsService.getProjects();
  }
  // openDialog(){
  //   const dialogRef = this.dialog.open(AddProjectComponent);
  // }

  // UserService functions
  getProjectDetail(event: ProjectsData) {
    this.projectsService
      .getProject(event.id)
      .subscribe(response => this.projectData = response);
    this.displayData = true;
  }

  search() {
    this.isLoading = true;
    this.DataProjects = this.DataProjects.filter((res) => {
      if (!this.DataProjects || !this.name) {
        this.projectsService.getProjects().subscribe((results) => {
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
