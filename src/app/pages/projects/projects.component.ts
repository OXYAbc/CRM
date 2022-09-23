import { Component, OnInit } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  dataItem : ProjectsData[] = [];
  constructor(private cardService: ProjectsService) { }

  ngOnInit(): void {
    this.cardService.getData().subscribe(results=> (this.dataItem = results));
  }
}
