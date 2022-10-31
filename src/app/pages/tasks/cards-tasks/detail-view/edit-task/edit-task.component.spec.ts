import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { Task } from 'src/app/models/projects.model';

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
});
