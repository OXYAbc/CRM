import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AppModule } from 'src/app/app.module';

import { AddProjectTaskComponent } from './add-project-task.component';

describe('AddProjectTaskComponent', () => {
  let component: AddProjectTaskComponent;
  let fixture: ComponentFixture<AddProjectTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProjectTaskComponent],
      imports: [
        AppModule,
        ReactiveFormsModule,
        DialogModule,
        BrowserDynamicTestingModule,
        CommonModule,
      ],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create div with content', () => {
    const contentForm =
      fixture.debugElement.nativeElement.querySelector('.content-form');
    expect(contentForm.children.length).toBe(1);
  });
  it('It should return equal count of elements', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#project-task-form');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(1);
    expect(formElement.children.length).toBe(5);
  });
});
