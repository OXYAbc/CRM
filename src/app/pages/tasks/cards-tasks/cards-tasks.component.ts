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
task!:any;
name!: String;

displayData = false;
displaySearch = false;
isLoading = true;



constructor  (public dialog: Dialog, private tasksService: TasksService){}
openDialog() {
  const dialogRef = this.dialog.open(ControlPanelComponent);
  // dialogRef.closed.subscribe(console.log);
}
ShowSearch() {
  this.displaySearch = !this.displaySearch;
  // this.tasksService.getData();
}

getDetail(event: TasksData) {
  this.task = this.tasksService.getTask(event.name)
  console.log(this.task)
    // .getTasks(event.id)
  }

  // Modify data on screen
  search() {
    this.isLoading = true;
    this.DataItem = this.DataItem.filter((res) => {
      if (!this.DataItem || !this.name) {
        // this.tasksService.getData()
      } else {
        (error: any) => console.log(error);
      }
      return res.name
        .toLocaleLowerCase()
        .match(this.name.toLocaleLowerCase());
    });
  }

}
