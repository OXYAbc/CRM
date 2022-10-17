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
        { provide: DIALOG_DATA, useValue: {} },
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
    component.data = {
      id: '1',
      name: 'nazwa taska',
      discription: 'opis',
      deadline: '2022-12-29',
      comments: [{ user: 'string', comments: ['string'] }],
      check: true,
      level: 'low',
    };
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('form');

    const taskNameInput = form.querySelector('#TaskName');
    expect(taskNameInput.value).toBe('nazwa taska');

    const discTextArea = form.querySelector('#TaskDiscription');
    expect(discTextArea.value).toBe('opis');

    const LevelTask = form.querySelector('#LevelTask');
    expect(LevelTask.value).toBe('low');

    const deadline = form.querySelector('#deadline');
    expect(deadline.value).toBe('2022-12-29');
  });
});
