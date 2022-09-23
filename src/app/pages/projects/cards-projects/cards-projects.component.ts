import { Component, Input } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss']
})
export class CardsProjectsComponent{
  name="Name project";
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'time', "viewMore"];
 @Input() DataProjects:ProjectsData[] = [];
}