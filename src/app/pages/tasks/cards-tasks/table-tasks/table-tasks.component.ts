import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.scss'],
})
export class TableTasksComponent {
  @Input() DataItem: Task[] = [];
  @Output() DataEmitter = new EventEmitter<Task>();
  displayedColumns: string[] = [
    'id',
    'name',
    'discription',
    'deadline',
    'level',
    'viewMore',
  ];

  showDetails(element: Task) {
    this.DataEmitter.emit(element);
  }
  chcekClass(check: boolean) {
    return check ? 'checked' : 'unchecked';
  }
}
