import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required]],
      taskDiscription: ['', [Validators.required]],
      levelTask: ['', [Validators.required]],
      deadLine: ['', [Validators.required]],
      id: this.id,
    });
    // this.taskForm.valueChanges.subscribe(console.log);
  }
  get taskName() {
    return this.taskForm.get('taskName');
  }
  get taskDiscription() {
    return this.taskForm.get('taskDiscription');
  }
  get levelTask() {
    return this.taskForm.get('levelTask');
  }
  get deadLine() {
    return this.taskForm.get('deadLine');
  }
  getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }

  onSubmit(): void {
    // console.log(this.taskForm);
    this.isSubmitted = true;
    if (!this.taskForm.valid) {
      false;
    } else {
      this.taskEmitter.emit(this.taskForm.value);
      this.dialogRef.close(JSON.stringify(this.taskForm.value));
    }
  }
}
