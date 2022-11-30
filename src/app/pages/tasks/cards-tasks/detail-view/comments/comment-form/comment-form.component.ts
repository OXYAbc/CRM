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
  task!: Task;
  @Input()
  userName: string = '';
  @Output() form = new EventEmitter<string>();

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
      user: this.userName,
    });
  }
  get comment() {
    return this.commentForm.get('comment');
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      this.form.emit(this.commentForm.value);
      this.commentForm.controls['comment'].setValue('')
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
