import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form.component';

@NgModule({ imports: [ FormsModule, ReactiveFormsModule], declarations: [CommentFormComponent], providers: [ ], exports: [CommentFormComponent] })
export class CommentFormModule {}
