import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/projects.model';
import { UserData } from 'src/app/models/user.model';
import { ProjectsService } from '../projects.service';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent {
  @Input() projects: Project[] = [];
  @Input() singleProjects: String | undefined;
  @Input() users: UserData[] = []
  projectDetail!: Project;
  displayDetails = false;
  searchName!: String;
  isLoading?: boolean;
  displaySearch: boolean = true;

  constructor(
    private dialog: Dialog,
    private projectService: ProjectsService
  ) {}
  projectsDetail: Project | undefined;

  openAddDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent, {data: this.users});
    dialogRef.closed.subscribe(res => this.projectService.addProject(res as Project))
  }
  onGetDetail(event: Project) {
    return this.projectService.getProject(event.id).subscribe((item) => {
      this.projectDetail = item as Project;
      this.projectDetail.id = event.id;
    });
  }
  search() {
    this.isLoading = true;
    this.projects = this.projects.filter((res) => {
      if (!this.projects || !this.searchName) {
        this.projectService.project$.subscribe((results) => {
          this.projects = results;
        });
      } else {
        (error: any) => console.log(error);
      }
      return res.name
        .toLocaleLowerCase()
        .match(this.searchName.toLocaleLowerCase());
    });
  }
  ShowSearch() {
    this.displaySearch = !this.displaySearch;
  }
}
