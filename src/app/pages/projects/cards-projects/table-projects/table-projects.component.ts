import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-table-projects',
  templateUrl: './table-projects.component.html',
  styleUrls: ['./table-projects.component.scss'],
})
export class TableProjectsComponent implements OnInit {
  @Input() DataProjects: Project[] = [];
  @Output() DataEmitter = new EventEmitter<Project[]>();

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'time',
    'viewMore',
  ];
  showDetails(element: Project[]) {
    this.DataEmitter.emit(element);
  }

  constructor() {}

  ngOnInit(): void {}
}
