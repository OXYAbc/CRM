import { Component, Input, OnInit } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-progress-cards',
  templateUrl: './progress-cards.component.html',
  styleUrls: ['./progress-cards.component.scss']
})
export class ProgressCardsComponent implements OnInit {

  @Input() DataProjects:ProjectsData[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
