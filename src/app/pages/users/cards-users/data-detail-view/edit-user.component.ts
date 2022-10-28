import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-trash-component',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  editUser!: FormGroup;
  isSubmitted = false;
  user: User;

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<User>,
    @Inject(DIALOG_DATA) public data: {user: User, users: User[]},
  ) {
    this.user = { ...data.user } as User;
  }

  ngOnInit(): void {
    this.editUser = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      departament: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      position: ['', [Validators.required]],
      manager: ['', [Validators.required]],
      id: this.user.id
    });
  }
  get firstName() {
    return this.editUser.get('firstName');
  }
  get lastName() {
    return this.editUser.get('lastName');
  }
  get phoneNumber() {
    return this.editUser.get('phoneNumber');
  }
  get departament() {
    return this.editUser.get('departament');
  }
  get emailAddress() {
    return this.editUser.get('emailAddress');
  }
  get position() {
    return this.editUser.get('position');
  }
  get manager() {
    return this.editUser.get('manager');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.editUser.valid) {
      false;
    } else {
      this.dialogRef.close(this.editUser.value as User);
    }
  }
}
