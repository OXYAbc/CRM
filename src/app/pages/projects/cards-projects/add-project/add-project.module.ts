import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [AddProjectComponent],
  providers: [],
  exports: [AddProjectComponent],
})
export class AddProjectModule {}
