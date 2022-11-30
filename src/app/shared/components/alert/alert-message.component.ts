import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  template: ` <div class="alert">
    <div class="alert-header">
      <div class="alert-header-icon">
        <hr />
        <i class="uil uil-exclamation-octagon"></i>
        <hr />
      </div>
      <div class="alert-header-title">
      <ng-content>
  </ng-content>
        Are you sure you want to <b>remove</b> this {{data.type}}?
      </div>
    </div>
    <div class="alert-buttons">
      <button class="btn waring" (click)="approveMoveToTrash()">
        Yes i'am sure
      </button>
      <button class="btn" (click)="cancelTrash()">Cancel</button>
    </div>
  </div>`,
  styleUrls: ['./alert-message.component.scss'],
})
export class AlertMessageComponent {
  constructor(private dialogRef: DialogRef<boolean>, @Inject(DIALOG_DATA) public data: {type: string}) {}

  approveMoveToTrash() {
    this.dialogRef.close(true);
  }
  cancelTrash() {
    this.dialogRef.close(false);
  }
}
