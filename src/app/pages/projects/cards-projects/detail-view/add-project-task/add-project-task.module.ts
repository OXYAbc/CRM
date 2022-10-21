import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProjectTaskComponent } from './add-project-task.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [AddProjectTaskComponent],
  providers: [],
  exports: [AddProjectTaskComponent],
})
export class AddProjectTaskModule {}
