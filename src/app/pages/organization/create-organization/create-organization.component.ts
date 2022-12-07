import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss'],
})
export class CreateOrganizationComponent implements OnInit {
  organizationForm!: FormGroup;
  usersArray: User[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public users: any[]
  ) {}

  ngOnInit() {
    this.organizationForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      sector: ['', [Validators.required]],
    });
  }

  resetForm(): void {
    this.organizationForm.reset();
  }

  get name() {
    return this.organizationForm.get('name');
  }
  get description() {
    return this.organizationForm.get('description');
  }
  get sector() {
    return this.organizationForm.get('sector');
  }

  onSubmit(): void {
    if (this.organizationForm.valid) {
      this.dialogRef.close(this.organizationForm.value);
      this.resetForm();
    }
  }
  closeDialog() {
    this.dialogRef.close();
    this.resetForm();
  }
}
