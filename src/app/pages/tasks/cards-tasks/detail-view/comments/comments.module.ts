import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { CommentFormModule } from './comment-form/comment-form.module';

@NgModule({ imports: [CommentFormModule], declarations: [CommentsComponent], providers: [ ], exports: [CommentsComponent] })
export class CommenstsModule {}
