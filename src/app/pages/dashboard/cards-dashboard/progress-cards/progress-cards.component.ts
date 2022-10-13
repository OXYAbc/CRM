import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-progress-cards',
  templateUrl: './progress-cards.component.html',
  styleUrls: ['./progress-cards.component.scss'],
})
export class ProgressCardsComponent implements OnInit {
  @Input() DataProjects: Project[] = [];
  constructor() {}

  ngOnInit(): void {}
}
