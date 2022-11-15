import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';

import { EditTaskComponent } from './edit-task.component';

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, DialogModule, CommonModule, ReactiveFormsModule],
      declarations: [EditTaskComponent],
      providers: [
        { provide: FormBuilder },
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
        {
          provide: DIALOG_DATA,
          useValue: {
            id: '1',
            name: 'nazwa taska',
            description: 'opis',
            deadline: '2022-12-29',
            comments: [{ user: 'string', comment: 'string' }],
            check: true,
            level: 'low',
            added: '2022-12-29',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should autocomplate form', () => {
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('form');
    const taskNameInput = form.querySelector('#name');
    expect(taskNameInput.value).toBe('nazwa taska');

    const discTextArea = form.querySelector('#description');
    expect(discTextArea.value).toBe('opis');

    const LevelTask = form.querySelector('#Level');
    expect(LevelTask.value).toBe('low');

    const deadline = form.querySelector('#deadline');
    expect(deadline.value).toBe('2022-12-29');
  });
  it('call to close dialog', () => {
    const cancelSpy = spyOn(component, 'closeDialog');
    const btns = fixture.nativeElement.querySelectorAll('.btn');
    const btnCancel = btns[1];
    btnCancel.click();
    expect(cancelSpy).toHaveBeenCalled();
  });
  it('should call to on submit', () => {
    const submitSpy = spyOn(component, 'onSubmit');

    const dialogwindow = fixture.nativeElement.querySelector('.content-form');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    ) as HTMLButtonElement;
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

    submitBtn?.click();
    fixture.detectChanges();

    expect(submitSpy).toHaveBeenCalled();
  });
  it('should close dialog window', () => {
    const closeDialogSpy = spyOn(component, 'closeDialog');
    const closeBtn = fixture.nativeElement.querySelectorAll('.btn')[1];
    closeBtn.click();
    expect(closeDialogSpy).toHaveBeenCalled();
  });
  it('field validity', () => {
    let name = component.taskFormEdit.controls['name'];
    let description = component.taskFormEdit.controls['description'];
    let level = component.taskFormEdit.controls['level'];
    let deadline = component.taskFormEdit.controls['deadline'];

    description.setValue('');
    name.setValue('');
    level.setValue('');
    deadline.setValue('');
    expect(name.valid).toBeFalsy();
  });
  it('should check valid', () => {
    const dialogCloseSpy = spyOn(component.dialogRef, 'close');
    const submitBtn = fixture.nativeElement.querySelector(
      'button[type=submit]'
    );
    submitBtn.click();
    expect(dialogCloseSpy).toHaveBeenCalled();
  });
});
