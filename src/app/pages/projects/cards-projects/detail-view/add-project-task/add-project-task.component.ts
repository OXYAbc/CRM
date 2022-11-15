import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/pages/users/users.service';

@Component({
  selector: 'app-add-project-task',
  templateUrl: './add-project-task.component.html',
  styleUrls: ['./add-project-task.component.scss'],
})
export class AddProjectTaskComponent implements OnInit {
  addProjectTaskForm!: FormGroup;
  @Output() taskEmitter = new EventEmitter<string>();
  users: User[] = [];

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit() {
    this.addProjectTaskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      stage: 'toDo',
      score: 0,
    });
  }
  get title() {
    return this.addProjectTaskForm.get('title');
  }
  get description() {
    return this.addProjectTaskForm.get('description');
  }

  onSubmit(): void {
    if (this.addProjectTaskForm.valid) {
      this.dialogRef.close(this.addProjectTaskForm.value);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
