import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppModule } from 'src/app/app.module';

import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [
        AppModule,
        ReactiveFormsModule,
        DialogModule,
        BrowserDynamicTestingModule,
        CommonModule,
      ],
      providers: [
        { provide: DIALOG_DATA,
          useValue: {
            uid: '1',
          } },
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create div with content', () => {
    const contentForm =
      fixture.debugElement.nativeElement.querySelector('.content-form');
    expect(contentForm.children[0].children.length).toBe(9);
  });
  it('It should return equal count of elements', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#taskForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
    expect(formElement.children.length).toBe(9);
  });
  it('form invalid when empty', () => {
    expect(component.taskForm.valid).toBeFalsy();
  });
  it('name field validity', () => {
    let name = component.taskForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });
  it('name field validity', () => {
    let errors = {};
    let name = component.taskForm.controls['name'];
    name.setValue('test');
    fixture.detectChanges();
    errors = name.errors || {};
    expect(errors).toBeTruthy();
  });
  it('submitting a form emits a task', () => {
    expect(component.taskForm.valid).toBeFalsy();
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    component.taskForm.controls['name'].setValue('nazwa');
    component.taskForm.controls['description'].setValue('test');
    component.taskForm.controls['level'].setValue('low');
    component.taskForm.controls['deadline'].setValue('2022-01-01');
    fixture.detectChanges();
    const submitSpy = spyOn(component, 'onSubmit');
    expect(component.taskForm.valid).toBeTruthy();
    submitBtn.click();
    expect(submitSpy).toHaveBeenCalled();
  });
  it('call to close dialog', () => {
    const cancelSpy = spyOn(component, 'closeDialog');
    const btns = fixture.nativeElement.querySelectorAll('.btn');
    const btnCancel = btns[1];
    btnCancel.click();
    expect(cancelSpy).toHaveBeenCalled();
  });
  it('should check property', () => {
    const nameSpy = spyOnProperty(component, 'name');
    const descriptionSpy = spyOnProperty(component, 'description');
    const levelSpy = spyOnProperty(component, 'level');
    const deadlineSpy = spyOnProperty(component, 'deadline');

    const dialogwindow = fixture.nativeElement.querySelector('.content-form');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    const inputElements = dialogwindow?.querySelectorAll('input');
    let nameInput = inputElements![0];
    let descriptionInput = fixture.nativeElement.querySelector('textarea');
    let levelInput = dialogwindow?.querySelector('select');
    let deadlineInput = inputElements![1];

    nameInput.value = 'nazwa';
    nameInput.dispatchEvent(new Event('input'));
    descriptionInput!.value = 'string';
    descriptionInput!.dispatchEvent(new Event('input'));
    levelInput!.value = 'low';
    levelInput!.dispatchEvent(new Event('change'));
    deadlineInput.value = '2022-12-31';
    deadlineInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(nameSpy).toBeDefined();
    expect(descriptionSpy).toBeDefined();
    expect(levelSpy).toBeDefined();
    expect(deadlineSpy).toBeDefined();
  });
});
