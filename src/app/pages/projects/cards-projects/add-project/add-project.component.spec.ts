import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AddProjectComponent } from './add-project.component';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      imports: [
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
  it('submitting a form emits a project', () => {
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
    const submitSpy = spyOn(component, 'onSubmit');
    expect(component.addProjectForm.valid).toBeTruthy();
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
  it('should test changeValue()', () => {
    component.users = [
      {
        id: '1',
        firstName: 'Julia',
        lastName: 'Wyka',
        phoneNumber: 123456,
        emailAddress: 'krish.lee@learningcontainer.com',
        position: 'Line Manager',
        departament: 'Digital',
        manager: 'Agata Janda',
        score: 5,
      },
    ];
    fixture.detectChanges();
    const dialogwindow = fixture.nativeElement.querySelector('.content-form');
    const closeSpy = spyOn(component.dialogRef, 'close');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    ) as HTMLButtonElement;
    const inputElements = dialogwindow?.querySelectorAll('input');
    let nameInput = inputElements![0];
    let descriptionInput = fixture.nativeElement.querySelector('textarea');
    let levelInput = dialogwindow?.querySelector('select');
    let deadlineInput = inputElements![1];
    let peopleCheckbox = dialogwindow?.querySelectorAll(
      'input[type="checkbox"]'
    ) as any;

    nameInput.value = 'nazwa';
    nameInput.dispatchEvent(new Event('input'));
    descriptionInput!.value = 'string';
    descriptionInput!.dispatchEvent(new Event('input'));
    levelInput!.value = 'low';
    levelInput!.dispatchEvent(new Event('change'));
    deadlineInput.value = '2022-12-31';
    deadlineInput.dispatchEvent(new Event('input'));
    peopleCheckbox![0].checked = true;
    peopleCheckbox![0].dispatchEvent(new Event('change'));
    fixture.detectChanges();

    submitBtn.click();
    fixture.detectChanges();
    expect(closeSpy).toHaveBeenCalledWith({
      name: 'nazwa',
      description: 'string',
      level: 'low',
      time: '2022-12-31',
      people: ['Julia Wyka'],
      tasks: [],
    } as unknown as string);
  });
  it('should call to close method', () => {
    const closeSpy = spyOn(component, 'closeDialog');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const cancelBtn = buttons[1];
    cancelBtn.click();
    expect(closeSpy).toHaveBeenCalled();
  });
});
