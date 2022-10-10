import { Dialog } from '@angular/cdk/dialog';
import { Component, Input} from '@angular/core';
import { TasksData } from 'src/app/models/tasks.model';
import { TasksService } from '../tasks.service';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@Component({
  selector: 'app-cards-tasks',
  templateUrl: './cards-tasks.component.html',
  styleUrls: ['./cards-tasks.component.scss']
})
export class CardsTasksComponent{
@Input() DataItem: TasksData[] = [];
displayedColumns: string[] = ['id', 'name', 'discription', 'deadline',"level", "viewMore"];
task!:TasksData;
displayData = false;


constructor  (public dialog: Dialog, private tasksService: TasksService){}
openDialog() {
  const dialogRef = this.dialog.open(ControlPanelComponent);
  // dialogRef.closed.subscribe(console.log);
}

getDetail(event: TasksData) {
  this.tasksService
    .getTaskDetail(event.id)
    .subscribe((response: TasksData) => this.task = response);
    this.displayData = true;
  }

}
