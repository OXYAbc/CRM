import { Component, Inject } from '@angular/core';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-data-control',
  templateUrl: './data-control.component.html',
  styleUrls: ['./data-control.component.scss']
})
export class DataControlComponent{
  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(DataDialog, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }
}
@Component({
  selector: 'app-data-dialog',
  templateUrl: './cdk-dialog-data-example-dialog.html',
  styleUrls: ['./cdk-dialog-data-example-dialog.scss'],
})
export class DataDialog {
  titleOf = "nameTask";
  discriptionOf = "discriptionTask";
  level ="levelTask";
  deadLine = "deadlineTask"
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
}