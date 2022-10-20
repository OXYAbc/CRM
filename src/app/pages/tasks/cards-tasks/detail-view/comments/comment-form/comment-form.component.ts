import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  commentForm!: FormGroup;
  isSubmitted = false;
  task!: Task;

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
      user: 'admin',
    });
  }
  get comment() {
    return this.commentForm.get('comment');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.commentForm.valid) {
      false;
    } else {
      this.dialogRef.close(this.commentForm.value);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
