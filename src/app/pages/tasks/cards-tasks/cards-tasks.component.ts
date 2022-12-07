import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from '../tasks.service';
import { AddTaskComponent } from './control-panel/add-task.component';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './cards-tasks.component.html',
  styleUrls: ['./cards-tasks.component.scss'],
})
export class CardsTasksComponent {
  @Input() tasks: Task[] = [];
  @Input() idTask!: string;
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'deadline',
    'level',
    'viewMore',
  ];
  columnDef = [
    {
      cdkColumnDef: 'id',
      cdkColumnDefTitle: 'id',
    },
    {
      cdkColumnDef: 'name',
      cdkColumnDefTitle: 'Name',
    },
    {
      cdkColumnDef: 'description',
      cdkColumnDefTitle: 'Description',
    },
    {
      cdkColumnDef: 'deadline',
      cdkColumnDefTitle: 'Deadline',
    },
    {
      cdkColumnDef: 'level',
      cdkColumnDefTitle: 'Level',
    },
  ];
  task!: any;
  searchName!: String;

  displayData = false;
  displaySearch = true;
  isLoading = true;

  constructor(public dialog: Dialog, private tasksService: TasksService) {}
  ngOnInit() {
    if (this.idTask) {
      this.onGetDetail(this.idTask);
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent,{ data: this.tasksService.userId});
    dialogRef.closed.subscribe((result) => {
      if (result != undefined) {
        this.tasksService.addTask(result as Task);
      }
    });
  }

  ShowSearch() {
    this.displaySearch = !this.displaySearch;
  }

  onGetDetail(id: string) {
    return this.tasksService.getTask(id).subscribe((items) => {
      this.task = items;
      this.task.id = id;
    });
  }

  search(event: any) {
    this.tasksService.setSearchWord(event.target.value);
  }
}
