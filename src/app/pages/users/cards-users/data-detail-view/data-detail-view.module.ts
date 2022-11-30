import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageModule } from 'src/app/shared/components/alert/alert-message.module';
import { DataDetailViewComponent } from './data-detail-view.component';
import { EditUserComponent } from './edit-user.component';

@NgModule({
  imports: [ReactiveFormsModule, DialogModule, CommonModule, AlertMessageModule],
  declarations: [DataDetailViewComponent, EditUserComponent,],
  providers: [],
  exports: [DataDetailViewComponent],
})
export class DataDetailViewModule {}
