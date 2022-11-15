import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  taskFormEdit!: FormGroup;
  task: Task;

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<Task>,
    @Inject(DIALOG_DATA) public data: Task
  ) {
    this.task = { ...data } as Task;
  }

  ngOnInit() {
    this.taskFormEdit = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      id: this.data.id,
    });
  }
  get name() {
    return this.taskFormEdit.get('name');
  }
  get description() {
    return this.taskFormEdit.get('description');
  }
  get level() {
    return this.taskFormEdit.get('level');
  }
  get deadline() {
    return this.taskFormEdit.get('deadline');
  }

  onSubmit(): void {
    if (!this.taskFormEdit.valid) {
      this.dialogRef.close(this.taskFormEdit.value as Task);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
