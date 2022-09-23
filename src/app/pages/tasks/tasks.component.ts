import { Component, OnInit } from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  dataItem : TasksData[] =[];
  constructor (private tasksCardsService: TasksService){}

  ngOnInit(): void {
    this.tasksCardsService.getData().subscribe(results =>(this.dataItem= results));
  }

}
