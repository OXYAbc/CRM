import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.scss'],
})
export class TableTasksComponent {
  @Input() tasks: Task[] = [];
  @Output() showDetail = new EventEmitter<string>();
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'deadline',
    'level',
    'viewMore',
  ];

  onShowDetails(element: string) {
    this.showDetail.emit(element);
  }
  chcekClass(check: boolean) {
    return check ? 'checked' : 'unchecked';
  }
}
