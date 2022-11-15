import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/projects.model';

@Component({
  selector: 'app-table-projects',
  templateUrl: './table-projects.component.html',
  styleUrls: ['./table-projects.component.scss'],
})
export class TableProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() projectEmitter = new EventEmitter<string>();

  displayedColumns: string[] = [
    'name',
    'description',
    'level',
    'time',
    'viewMore',
  ];
  showDetails(element: string) {
    this.projectEmitter.emit(element);
  }

  constructor() {}

  ngOnInit(): void {}
}
