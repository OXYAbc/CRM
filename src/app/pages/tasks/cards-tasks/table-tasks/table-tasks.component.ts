import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  styleUrls: ['./table-tasks.component.scss']
})
export class TableTasksComponent {

  @Input() DataItem: TasksData[] = [];
  @Output() DataEmitter = new EventEmitter<TasksData>();
  displayedColumns: string[] = ['id', 'name', 'discription', 'deadline',"level", "viewMore"];
  
  showDetails(element: TasksData){
    this.DataEmitter.emit(element);
  }

}
