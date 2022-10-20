import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      check: false,
      comments: [[{ user: null, comment: null }]],
    });
  }
  get name() {
    return this.taskForm.get('name');
  }
  get description() {
    return this.taskForm.get('description');
  }
  get level() {
    return this.taskForm.get('level');
  }
  get deadline() {
    return this.taskForm.get('deadline');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.taskForm.valid) {
      false;
    } else {
      this.dialogRef.close(this.taskForm.value);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
