import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [AddTaskComponent],
  providers: [],
  exports: [AddTaskComponent],
})
export class ControlPanelModule {}
