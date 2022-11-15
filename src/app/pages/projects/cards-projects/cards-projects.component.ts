import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
import { ProjectsService } from '../projects.service';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Input() idProject$!: string;
  @Input() users: User[] = [];
  projectDetail!: Project;
  searchName!: string;
  isLoading?: boolean;
  displaySearch: boolean = true;

  constructor(
    private dialog: Dialog,
    private projectService: ProjectsService
  ) {}

  ngOnInit() {
    if (this.idProject$) {
      this.onGetDetail(this.idProject$)
    }
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      data: this.users,
    });
    dialogRef.closed.subscribe((res) =>
      this.projectService.addProject(res as Project)
    );
  }
  onGetDetail(id: string) {
    return this.projectService.getProject(id).subscribe((item) => {
      this.projectDetail = item as Project;
      this.projectDetail.id = id;
    });
  }
  search(event: any) {
    this.projectService.setSearchWord(event.target.value);
  }
  ShowSearch() {
    this.displaySearch = !this.displaySearch;
  }
}
