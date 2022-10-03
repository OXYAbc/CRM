import { NgModule } from '@angular/core';
import { EditTaskComponent } from './edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [ FormsModule, ReactiveFormsModule ], declarations: [EditTaskComponent], providers: [ ], exports: [EditTaskComponent] })
export class EditTaskModule {}
