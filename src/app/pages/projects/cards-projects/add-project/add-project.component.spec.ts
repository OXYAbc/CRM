import {
  Dialog,
  DialogModule,
  DialogRef,
  DIALOG_DATA,
} from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppModule } from 'src/app/app.module';

import { AddProjectComponent } from './add-project.component';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      imports: [
        AppModule,
        ReactiveFormsModule,
        DialogModule,
        BrowserDynamicTestingModule,
        CommonModule,
      ],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: DIALOG_DATA, useValue: ['Kacper Jakiś', 'Dawid poręba'] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.users = ['Kacper Jakiś', 'Dawid poręba'];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create div with content', () => {
    const contentForm =
      fixture.debugElement.nativeElement.querySelector('.content-form');
    component.users = ['Kacper Jakiś', 'Dawid poręba'];
    fixture.detectChanges();
    expect(contentForm.children.length).toBe(2);
  });
  it('It should return equal count of elements', () => {
    component.users = ['Kacper Jakiś', 'Dawid poręba'];
    fixture.detectChanges();
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#taskForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
    expect(formElement.children.length).toBe(10);
  });
  it('form invalid when empty', () => {
    expect(component.addProjectForm.valid).toBeFalsy();
  });
  it('name field validity', () => {
    let name = component.addProjectForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });
  it('name field validity', () => {
    let errors = {};
    let name = component.addProjectForm.controls['name'];
    name.setValue('test');
    fixture.detectChanges();
    errors = name.errors || {};
    expect(errors).toBeTruthy();
  });
  it('submitting a form emits a task', () => {
    expect(component.addProjectForm.valid).toBeFalsy();
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    component.addProjectForm.controls['name'].setValue('nazwa');
    component.addProjectForm.controls['description'].setValue('opis');
    component.addProjectForm.controls['level'].setValue('low');
    component.addProjectForm.controls['time'].setValue('2022-01-01');
    component.addProjectForm.controls['people'].setValue([
      { 0: true },
      { 1: false },
    ]);

    fixture.detectChanges();
    console.log(component.addProjectForm.controls);
    const submitSpy = spyOn(component, 'onSubmit');
    expect(component.addProjectForm.valid).toBeTruthy();
    submitBtn.click();
    expect(submitSpy).toHaveBeenCalled();
  });
  it('call to close dialog', ()=>{
    const cancelSpy = spyOn(component, 'closeDialog');
    const btns = fixture.nativeElement.querySelectorAll(".btn");
    const btnCancel = btns[1];
    btnCancel.click();
    expect(cancelSpy).toHaveBeenCalled()
  })
});
