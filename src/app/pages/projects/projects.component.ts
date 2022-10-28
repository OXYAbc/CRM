import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { UserData } from 'src/app/models/user.model';
import { UsersService } from '../users/users.service';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  idItem: string | undefined;
  users: UserData[] = [];
  constructor(
    private projectService: ProjectsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectService.project$.subscribe(
      (results) => (this.projects = results)
    );
    this.usersService.getUsers().subscribe((res) => (this.users = res));
  }
}
