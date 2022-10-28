import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trash-component',
  template: ` <div class="alert">
    <div class="alert-header">
      <div class="alert-header-icon">
        <hr />
        <i class="uil uil-exclamation-octagon"></i>
        <hr />
      </div>
      <div class="alert-header-title">
        Are you sure you want to <b>remove</b> this task?
      </div>
    </div>
    <div class="alert-buttons">
      <button class="btn waring" (click)="approveMoveToTrash()">
        Yes i'am sure
      </button>
      <button class="btn" (click)="cancelTrash()">Cancel</button>
    </div>
  </div>`,
  styleUrls: ['./trash-alert.component.scss'],
})
export class TrashAlertComponent {
  constructor(public dialogRef: DialogRef<boolean>) {}

  approveMoveToTrash() {
    this.dialogRef.close(true);
  }
  cancelTrash() {
    this.dialogRef.close(false);
  }
}
