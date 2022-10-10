import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksData } from 'src/app/models/tasks.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
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
      id: this.id,
      check: false,
      comments: ['']
    });
    // this.taskForm.valueChanges.subscribe(console.log);
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

  save(task: TasksData) {
    this.taskService.addTask(task).subscribe(res => console.log(res));
  }

  onSubmit(): void {
    console.log(this.taskForm);
    this.isSubmitted = true;
    if (!this.taskForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.taskForm.value));
      this.save(this.taskForm.value);
    }
  }
}
