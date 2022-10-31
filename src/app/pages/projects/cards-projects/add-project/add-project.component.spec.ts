import { Dialog, DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
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
        { provide: DIALOG_DATA, useValue: ["Kacper Jakiś", "Dawid poręba"] },

      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.users = ["Kacper Jakiś", "Dawid poręba"];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create div with content', () => {
    const contentForm =
      fixture.debugElement.nativeElement.querySelector('.content-form');
    component.users = ["Kacper Jakiś", "Dawid poręba"];
    fixture.detectChanges()
    expect(contentForm.children.length).toBe(2);
  });
  it('It should return equal count of elements', () => {
    component.users = ["Kacper Jakiś", "Dawid poręba"];
    fixture.detectChanges()
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#taskForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
    expect(formElement.children.length).toBe(10);
  });
});
