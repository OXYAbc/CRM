import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommentFormModule } from './comment-form/comment-form.module';
import { CommonModule } from '@angular/common';

@NgModule({ imports: [CommentFormModule, CommonModule], declarations: [CommentsComponent], providers: [ ], exports: [CommentsComponent] })
export class CommenstsModule {}
