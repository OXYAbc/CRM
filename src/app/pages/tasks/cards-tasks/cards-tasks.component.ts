import { Component, Input} from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-cards-tasks',
  templateUrl: './cards-tasks.component.html',
  styleUrls: ['./cards-tasks.component.scss']
})
export class CardsTasksComponent{
@Input() DataItem: TasksData[] = [];
displayedColumns: string[] = ['name', 'discription', 'deadline', "viewMore"];

}
