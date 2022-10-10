import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { UserData } from "src/app/models/user.model";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  UserForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, public dialogRef: DialogRef<string>, private usersService: UsersService) {}

  getRandomInt() {
    return Math.floor(Math.random() * 1000);
  }


  ngOnInit(): void {
    this.UserForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      departament: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      userId : this.getRandomInt()
    });
  }
  get firstName() {
    return this.UserForm.get('firstName');
  }
  get lastName() {
    return this.UserForm.get('lastName');
  }
  get position() {
    return this.UserForm.get('position');
  }
  get departament() {
    return this.UserForm.get('departament');
  }
  get phoneNumber() {
    return this.UserForm.get('phoneNumber');
  }
  get emailAddress() {
    return this.UserForm.get('emailAddress');
  }

  save(user: UserData) {
    this.usersService.addUser(user);
  }

  onSubmit(): void {
    console.log(this.UserForm);
    this.isSubmitted = true;
    if (!this.UserForm.valid) {
      false;
    } else {
      this.dialogRef.close(JSON.stringify(this.UserForm.value));
      this.save(this.UserForm.value);
    }
  }
}
