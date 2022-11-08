import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
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
  @Input() users: User[] = [];
  projectDetail!: Project;
  searchName!: string;
  isLoading?: boolean;
  displaySearch: boolean = true;

  constructor(
    private dialog: Dialog,
    private projectService: ProjectsService
  ) {}

  openAddDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      data: this.users,
    });
    dialogRef.closed.subscribe((res) =>
      this.projectService.addProject(res as Project)
    );
  }
  onGetDetail(event: Project) {
    return this.projectService.getProject(event.id).subscribe((item) => {
      this.projectDetail = item as Project;
      this.projectDetail.id = event.id;
    });
  }
  search(event: any) {
    this.projectService.setSearchWord(event.target.value);
  }
  ShowSearch() {
    this.displaySearch = !this.displaySearch;
  }
}
