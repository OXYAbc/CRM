import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@Component({
  selector: 'app-cards-tasks',
  templateUrl: './cards-tasks.component.html',
  styleUrls: ['./cards-tasks.component.scss'],
})
export class CardsTasksComponent {
  @Input() DataItem: Task[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'discription',
    'deadline',
    'level',
    'viewMore',
  ];
  dataDetails: Task | undefined;

  constructor(public dialog: Dialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(ControlPanelComponent);
    // dialogRef.closed.subscribe(console.log);
  }

  viewDetails(element: any) {
    this.dataDetails = element;
    // console.log(this.dataDetails)
  }
}
