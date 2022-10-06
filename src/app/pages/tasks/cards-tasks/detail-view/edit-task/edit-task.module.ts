import { NgModule } from '@angular/core';
import { EditTaskComponent } from './edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({ imports: [ FormsModule, ReactiveFormsModule, CommonModule ], declarations: [EditTaskComponent], providers: [ ], exports: [EditTaskComponent] })
export class EditTaskModule {}
