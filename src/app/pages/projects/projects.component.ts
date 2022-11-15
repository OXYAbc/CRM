import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users/users.service';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];
  idItem$!: string;
  users: User[] = [];
  constructor(
    private projectService: ProjectsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.idItem$ = params['id'];
  });

  }

  ngOnInit(): void {
    this.projectService.projects$.subscribe(
      (results) => (this.projects = results)
    );
    this.usersService.user$.subscribe((res) => (this.users = res));
  }
}
