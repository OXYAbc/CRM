import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateOrganizationComponent } from './create-organization.component';

@Injectable()
export class DialogRefMock {
  close() {}
}

describe('CreateOrganizationComponent', () => {
  let component: CreateOrganizationComponent;
  let fixture: ComponentFixture<CreateOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrganizationComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: DialogRef, useClass: DialogRefMock },
        { provide: DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    spyOn(component.dialogRef, 'close');
    component.organizationForm.controls['name'].setValue('name');
    component.organizationForm.controls['description'].setValue('description');
    component.organizationForm.controls['sector'].setValue('IT');
    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();
    expect(component.organizationForm.controls['name'].value).toBe(null);
    expect(component.organizationForm.controls['description'].value).toBe(null);
    expect(component.organizationForm.controls['sector'].value).toBe(null);
    expect(component.dialogRef.close).toHaveBeenCalledWith({ name: 'name', description: 'description', sector: 'IT' } as any);
  });

  it('should call closeDialog', () => {
    spyOn(component, 'closeDialog');
    component.closeDialog();
    expect(component.closeDialog).toHaveBeenCalled();
  });
  it('should reset the form', () => {
    component.organizationForm.patchValue({
      name: 'test',
      description: 'test',
      sector: 'test',
    });
    component.resetForm();

    expect(component.organizationForm.controls['name'].value).toBe(null);
    expect(component.organizationForm.controls['description'].value).toBe(null);
    expect(component.organizationForm.controls['sector'].value).toBe(null);
  });
  it('should call to resetForm alter closed', () => {
    spyOn(component, 'resetForm');
    const btn = fixture.nativeElement.querySelectorAll('button')[1];
    btn.click();
    component.closeDialog();
    expect(component.resetForm).toHaveBeenCalled();
  });
});
