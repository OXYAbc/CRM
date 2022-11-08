import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from '../tasks.service';
import { AddTaskComponent } from './control-panel/add-task.component';

@Component({
  selector: 'app-cards-tasks',
  templateUrl: './cards-tasks.component.html',
  styleUrls: ['./cards-tasks.component.scss'],
})
export class CardsTasksComponent {
  @Input() tasks: Task[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'discription',
    'deadline',
    'level',
    'viewMore',
  ];
  task!: any;
  searchName!: String;

  displayData = false;
  displaySearch = true;
  isLoading = true;

  constructor(public dialog: Dialog, private tasksService: TasksService) {}
  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent);
    dialogRef.closed.subscribe((result) => {
      if (result != undefined) {
        this.tasksService.addTask(result as Task);
      }
    });
  }

  ShowSearch() {
    this.displaySearch = !this.displaySearch;
  }

  getDetail(event: Task) {
    return this.tasksService.getTask(event.id).subscribe((items) => {
      this.task = items;
      this.task.id = event.id;
    });
  }

  search(event: any) {
    this.tasksService.setSearchWord(event.target.value);
  }
}
