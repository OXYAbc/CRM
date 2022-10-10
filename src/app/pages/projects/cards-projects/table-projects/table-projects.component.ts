import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-table-projects',
  templateUrl: './table-projects.component.html',
  styleUrls: ['./table-projects.component.scss']
})
export class TableProjectsComponent implements OnInit {
  @Input() DataProjects: ProjectsData[]= [];
  @Output() DataEmitter = new EventEmitter<ProjectsData>();

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'time',
    'viewMore',
  ];
  showDetails(element: ProjectsData){
    this.DataEmitter.emit(element);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
