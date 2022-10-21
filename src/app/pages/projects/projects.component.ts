import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  idItem: string | undefined;
  constructor(
    private cardService: ProjectsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cardService.project$.subscribe((results) => (this.projects = results));
  }
}
