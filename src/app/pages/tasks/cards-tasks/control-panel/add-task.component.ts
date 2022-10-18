import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;
  isSubmitted = false;
  id = this.getRandomInt();
  @Output() taskEmitter = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<string>,
    private taskService: TasksService
  ) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      level: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      check: false,
      comments: [''],
    });
  }
  get name() {
    return this.taskForm.get('name');
  }
  get discription() {
    return this.taskForm.get('discription');
  }
  get level() {
    return this.taskForm.get('level');
  }
  get deadline() {
    return this.taskForm.get('deadline');
  }
  getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }

  save(task: Task) {
    this.taskService.addTask(task);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.taskForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.taskForm.value));
      this.save(this.taskForm.value);
    }
  }
  closeDialog(){
    this.dialogRef.close()
  }
}
