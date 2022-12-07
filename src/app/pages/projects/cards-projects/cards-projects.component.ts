import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { map, Observable, tap } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
import { UserState } from 'src/app/shared/user.state';
import { UsersService } from '../../users/users.service';
import { ProjectsService } from '../projects.service';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-card-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent implements OnInit {
  @Select(UserState) user$?: Observable<string | any>

  @Input() projects: Project[] = [];
  @Input() idProject!: string;
  @Input() users: User[] = [];
  public userRole$?: Observable<string>
  projectDetail!: Project;
  searchName!: string;
  isLoading?: boolean;
  displaySearch: boolean = true;
  displayedColumns: string[] = [
    'name',
    'description',
    'level',
    'time',
    'viewMore',
  ];
  columnDef = [
    {
      cdkColumnDef: 'name',
      cdkColumnDefTitle: 'Name',
    },
    {
      cdkColumnDef: 'description',
      cdkColumnDefTitle: 'Description',
    },
    {
      cdkColumnDef: 'level',
      cdkColumnDefTitle: 'Level',
    },
    {
      cdkColumnDef: 'time',
      cdkColumnDefTitle: 'Deadline',
    },
  ];

  constructor(
    private dialog: Dialog,
    private projectService: ProjectsService,
    private userService: UsersService
  ) {
    this.user$?.pipe(
      map((dataLogin) => dataLogin.user.uid),
      tap((userId: string) => {
        this.userRole$ = this.userService.getUserRole(userId);
      })
    ).subscribe()
  
}

ngOnInit() {
  if (this.idProject) {
    this.onGetDetail(this.idProject);
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
