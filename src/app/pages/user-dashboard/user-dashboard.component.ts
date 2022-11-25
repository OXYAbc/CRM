import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  userEditForm!: FormGroup;
  userForm: any;
  userEdit: boolean = false;
  _user: any;
  get user(): any {
    return this._user;
  }
  onAdd = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    @Inject(DIALOG_DATA) public data: { user: any }
  ) {
    this._user = { ...this.data.user };
    this.userForm = { ...this.data.user };
  }
  ngOnInit(): void {
    this.userEditForm = this.fb.group({
      displayName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      photoURL: ['', [Validators.required]],
    });
  }

  get displayName() {
    return this.userEditForm.get('displayName');
  }
  get phoneNumber() {
    return this.userEditForm.get('phoneNumber');
  }
  get emailAddress() {
    return this.userEditForm.get('emailAddress');
  }
  get photoURL() {
    return this.userEditForm.get('photoURL');
  }

  onEdit() {
    this.userEdit = !this.userEdit;
  }
  onSaveShanges() {
    this.userEdit = !this.userEdit;
    this.onAdd.emit(this.userEditForm.value);
  }
}
