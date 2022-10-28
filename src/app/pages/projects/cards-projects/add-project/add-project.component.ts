import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Project } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  addProjectForm!: FormGroup;
  usersArray: User[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<string>,
    private taskService: ProjectsService,
    @Inject(DIALOG_DATA) public users: any[]
  ) {}

  ngOnInit() {
    this.addProjectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      level: ['', [Validators.required]],
      time: ['', [Validators.required]],
      people: new FormArray([]),
      tasks: this.fb.array([]),
    });
    this.addCheckBox();
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
    return this.addProjectForm.controls['people'] as FormArray;
  }

  addCheckBox() {
    this.users.forEach(() => this.people.push(new FormControl(false)));
  }
  changeValue() {
    const toSend = this.addProjectForm.value.people.map(
      (item: boolean, index: number) => {
        if (item)
          return ((item as unknown as string) =
            this.users[index].firstName + ' ' + this.users[index].lastName);
        return null;
      }
    );
    this.addProjectForm.value.people = toSend.filter(
      (item: any) => item != null
    );
  }
  save(project: Project) {
    this.taskService.addProject(project);
  }

  onSubmit(): void {
    if (this.addProjectForm.valid) {
      this.changeValue();
      this.dialogRef.close(this.addProjectForm.value);
    } else {
      false;
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
