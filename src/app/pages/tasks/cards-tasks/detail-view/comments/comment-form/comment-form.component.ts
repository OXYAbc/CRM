import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksData } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/pages/tasks/tasks.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  commentForm!: FormGroup;
  isSubmitted = false;
  @Input() idTask!: string;
  task!: TasksData;

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<string>,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required],
      user: 'admin',
    });
  }
  get comment() {
    return this.commentForm.get('comment');
  }
  save(task: TasksData) {
    // this.taskService.addComment(task, this.idTask);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.commentForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.commentForm.value));
      this.save(this.commentForm.value);
    }
  }
}
