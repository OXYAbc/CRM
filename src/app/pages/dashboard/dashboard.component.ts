import { Component } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  dataItem : ProjectsData[] = [];
  constructor(private cardService: ProjectsService) { }

  ngOnInit(): void {
    this.cardService.getProjects().subscribe(results=> (this.dataItem = results));
  }
}
