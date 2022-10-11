import { Component, Input, OnInit } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-project-detail-view',
  templateUrl: './project-detail-view.component.html',
  styleUrls: ['./project-detail-view.component.scss']
})
export class ProjectDetailViewComponent implements OnInit {
  @Input() projectDetail: ProjectsData | undefined;

  constructor() { }
  ngOnInit(): void {
  }

}
