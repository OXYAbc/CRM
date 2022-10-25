import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Project } from 'src/app/models/projects.model';
import { UserData } from 'src/app/models/user.model';
import { UsersService } from 'src/app/pages/users/users.service';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  addProjectForm!: FormGroup;
  isSubmitted = false;
  usersArray: UserData[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<string>,
    private taskService: ProjectsService,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.addProjectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: ['', [Validators.required]],
      time: ['', [Validators.required]],
      people: this.fb.array([]),
      tasks: this.fb.array([]),
    });
    this.userService.getUsers().subscribe((res) => (this.usersArray = res));
  }
  get name() {
    return this.addProjectForm.get('name');
  }
  get description() {
    return this.addProjectForm.get('description');
  }
  get level() {
    return this.addProjectForm.get('level');
  }
  get time() {
    return this.addProjectForm.get('time');
  }
  get people() {
    return this.addProjectForm.get('user');
  }

  onCheckboxChange(e: any) {
    console.log(e)
    console.log(this.addProjectForm)
    const user: FormArray = this.addProjectForm.get('people') as FormArray;
    if (e.checked) {
      user.push(new FormControl(e.value));
    } else {
      let i: number = 0;
      user.controls.forEach((item) => {
        if (item.value == e.value) {
          user.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  save(project: Project) {
    this.taskService.addProject(project);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.addProjectForm.valid) {
      false;
    } else {
      this.dialogRef.close(this.addProjectForm.value);
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
