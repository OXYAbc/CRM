import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDetailViewComponent } from './data-detail-view.component';
import { EditUserComponent } from './edit-user.component';
import { TrashAlertUserComponent } from './trash-alert.component';

@NgModule({
  imports: [ReactiveFormsModule, DialogModule, CommonModule],
  declarations: [DataDetailViewComponent, EditUserComponent, TrashAlertUserComponent],
  providers: [],
  exports: [DataDetailViewComponent],
})
export class DataDetailViewModule {}
