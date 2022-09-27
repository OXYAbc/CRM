import { Component } from '@angular/core';
import {Dialog} from '@angular/cdk/dialog';
import { ControlComponentComponent } from '../control-component/control-component.component';

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
    // this.dialog.open(ControlComponentComponent, {
    //   minWidth: '300px',
    //   data: {
    //     animal: 'panda',
    //   },
    // });
  }
}