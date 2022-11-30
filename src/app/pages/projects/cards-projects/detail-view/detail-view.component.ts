import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ProjectsService } from '../../projects.service';
import { Project, Task } from 'src/app/models/projects.model';
import { AddProjectTaskComponent } from './add-project-task/add-project-task.component';
import { AlertMessageComponent } from 'src/app/shared/components/alert/alert-message.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  todo: Task[] = [];
  inProgress: Task[] = [];
  inReview: Task[] = [];
  done: Task[] = [];
  trash: Task[] = [];
  projectName: string = '';
  projectUsers: string[] = [];
  private _project!: Project;
  @Input()
  get project(): Project {
    return this._project;
  }
  set project(project: Project) {
    this.projectName = project.name;
    this.projectUsers = project.people;
    this._project = project;
    this.todo = project.tasks.filter((res: Task) => res.stage == 'toDo') || [];
    this.inProgress =
      project.tasks.filter((res: Task) => res.stage == 'inProgress') || [];
    this.inReview =
      project.tasks.filter((res: Task) => res.stage == 'inReview') || [];
    this.done = project.tasks.filter((res: Task) => res.stage == 'done') || [];
  }
  constructor(
    private dialog: Dialog,
    private projectService: ProjectsService
  ) {}
  openDialog() {
    const dialogRef = this.dialog.open(AddProjectTaskComponent);
    dialogRef.closed.subscribe((result) => {
      if (result != undefined) {
        this.todo.push(result as Task);
        this.sendArray();
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (event.container.id == 'trash') {
        const dialogRef = this.dialog.open(AlertMessageComponent, { data: {type: 'task'}});
        dialogRef.closed.subscribe((res) => {
          if (res) {
            this.sendArray();
          } else {
            transferArrayItem(
              event.container.data,
              event.previousContainer.data,
              event.currentIndex,
              event.previousIndex
            );
            this.changeStage(
              event.previousContainer.data,
              event.previousContainer.id
            );
            this.sendArray();
          }
        });
      } else {
        this.changeStage(event.container.data, event.container.id);
        this.sendArray();
      }
    }
  }
  ngOnChanges(): void {}
  changeStage(item: Task[], containerID: string) {
    item.map((res) => (res.stage = containerID));
  }
  sendArray() {
    let tablica = [
      ...this.todo,
      ...this.inProgress,
      ...this.inReview,
      ...this.done,
    ];
    this.projectService.updateTasks(tablica, this._project.id);
  }
  addScore(task: Task, value: number) {
    task.score += value;
    this.sendArray();
  }
}
