import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form.component';

@NgModule({ imports: [ FormsModule, ReactiveFormsModule, CommonModule], declarations: [CommentFormComponent], providers: [ ], exports: [CommentFormComponent] })
export class CommentFormModule {}
