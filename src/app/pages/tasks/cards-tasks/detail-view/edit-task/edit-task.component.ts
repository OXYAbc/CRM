import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pairwise, startWith } from 'rxjs';
import { TasksData } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskForm!: FormGroup;
  isSubmitted = false;
  id = this.getRandomInt();

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: TasksData) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required]],
      taskDiscription: ['', [Validators.required]],
      levelTask: ['', [Validators.required]],
      deadLine: ['', [Validators.required]],
      id: this.data.id
    });
    // this.taskForm.valueChanges.subscribe(console.log);
  }
  get taskName() {
    return this.taskForm.get('taskName');
  };
  get taskDiscription() {
    return this.taskForm.get('taskDiscription');
  };
  get levelTask() {
    return this.taskForm.get('levelTask');
  }
  get deadLine() {
    return this.taskForm.get('deadLine');
  }
  getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }
  chagneDetector(){
    this.taskForm.valueChanges
    .pipe(startWith(null), pairwise())
    .subscribe(([prev, next]: [any, any]) => {
      console.log("PREV1", prev);
      console.log("NEXT1", next);
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.taskForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.taskForm.value));
      console.log(this.taskForm.value);
    }
  }

}