import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public users: User[]
  ) {
    this.users = this.users.filter(res => res.position == "Line Manager")
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      departament: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      position: ['', [Validators.required]],
      manager: ['', [Validators.required]],
    });
  }
  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  }
  get departament() {
    return this.userForm.get('departament');
  }
  get emailAddress() {
    return this.userForm.get('emailAddress');
  }
  get position() {
    return this.userForm.get('position');
  }
  get manager() {
    return this.userForm.get('manager');
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    } else {
      false;
    }
  }
}
