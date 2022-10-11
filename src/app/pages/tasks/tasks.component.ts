import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
    const x = this.tasksCardsService.getTasks().subscribe(items => {
      this.dataItem = items;
      console.log(items)
    });
  }

}
