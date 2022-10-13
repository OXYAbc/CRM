import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  UserForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>) {}

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      userName: ['', [Validators.required]],
      userSurname: ['', [Validators.required]],
      userPosition: ['', [Validators.required]],
      userDepartament: ['', [Validators.required]],
      userNumber: ['', [Validators.required]],
      userEmail: ['', [Validators.required]],
    });
  }
  get userName() {
    return this.UserForm.get('userName');
  }
  get userSurname() {
    return this.UserForm.get('userSurname');
  }
  get userPosition() {
    return this.UserForm.get('userPosition');
  }
  get userDepartament() {
    return this.UserForm.get('userDepartament');
  }
  get userNumber() {
    return this.UserForm.get('userNumber');
  }
  get userEmail() {
    return this.UserForm.get('userEmail');
  }

  onSubmit(): void {
    // console.log(this.UserForm);
    this.isSubmitted = true;
    if (!this.UserForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.UserForm.value));
    }
  }
}
