import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideDatabase } from '@angular/fire/database';
import { provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { Observable, of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Task } from 'src/app/models/tasks.model';
import { CardsModule } from 'src/app/shared/card.module';
import { EmptyDataModule } from 'src/app/shared/components/empty-data/empty-data.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { environment } from 'src/environments/environment';
import { TasksService } from '../tasks.service';

import { CardsTasksComponent } from './cards-tasks.component';
import { ControlPanelModule } from './control-panel/add-task.module';

@Injectable()
class TaskServiceMock {
  getTask(id: string): Observable<Task> {
    return of(
      new Task({
        id: '1',
        name: 'Test Task',
        description: 'string',
        deadline: '2022-12-31',
        comments: [{ user: 'string', comment: 'string' }],
        check: true,
        level: 'string',
        added: '1999-01-12',
        userId: '10'
      })
    );
  }
  addTask(task: Task) {}
}

describe('CardsTasksComponent', () => {
  let component: CardsTasksComponent;
  let fixture: ComponentFixture<CardsTasksComponent>;
  let service: TasksService;
  let tasks = [
    new Task({
      id: '2',
      name: 'Simple Task',
      description: 'string',
      deadline: '2022-12-31',
      comments: [{ user: '', comment: '' }],
      check: false,
      level: 'low',
      added: '1999-01-12',
      userId: '10'

    }),
  ];
  let task = new Task({
    id: '1',
    name: 'Simple Task',
    description: 'string',
    deadline: '2022-12-31',
    comments: [{ user: '', comment: '' }],
    check: false,
    level: 'low',
    added: '1999-01-12',
    userId: '10'

  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogModule,
        CommonModule,
        FormsModule,
        ControlPanelModule,
        TableModule,
        AppRoutingModule,
        CardsModule,
        EmptyDataModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [CardsTasksComponent],
      providers: [Dialog, { provide: TasksService, useClass: TaskServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsTasksComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open add task dialog', () => {
    const openSpy = spyOn(component, 'openDialog');
    component.displaySearch = false;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.btn');
    btn.click();
    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();
  });
  it('should show search input', () => {
    component.ShowSearch();
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    expect(search).toBeTruthy();
  });
  it('should show and hidden search input', () => {
    component.displaySearch = false;
    component.ShowSearch();
    fixture.detectChanges();
    expect(component.displaySearch).toBe(true);
    let search = fixture.nativeElement.querySelector("input[name='task name']");
    expect(search).toBeFalsy();
    component.ShowSearch();
    fixture.detectChanges();
    let searchtwo = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    expect(component.displaySearch).toBeFalsy();
    expect(searchtwo).toBeTruthy();
  });
  it('should called to show search func', () => {
    fixture.detectChanges();
    const buttonsSegment = fixture.nativeElement.querySelector(
      '.card-header-buttons'
    );
    const buttons = buttonsSegment.querySelectorAll('.btn');
    const buttonSerach = buttons[1];
    const searchShowSpy = spyOn(component, 'ShowSearch');
    buttonSerach.click();
    fixture.detectChanges();
    expect(searchShowSpy).toHaveBeenCalled();
    expect(buttonSerach).toBeTruthy();
  });
  it('should called to getDetail', () => {
    const getDetailSpy = spyOn(component, 'onGetDetail');
    component.onGetDetail(task.id);
    fixture.detectChanges();
    expect(getDetailSpy).toHaveBeenCalledWith(task.id);
  });
  it('should called to addTask', fakeAsync(() => {
    const addTaskSpy = spyOn(service, 'addTask');
    component.openDialog();
    fixture.detectChanges();

    const dialogwindow = document.querySelector('.content-form');
    const submitBtn = document.querySelector(
      'button[type=submit]'
    ) as HTMLButtonElement;
    const inputElements = dialogwindow?.querySelectorAll('input');
    let nameInput = inputElements![0];
    let descriptionInput = document.querySelector('textarea');
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

    expect(addTaskSpy).toHaveBeenCalled();
  }));
  it('It should called with  to getDetail', () => {
    component.tasks = tasks;
    fixture.detectChanges();
    const tableSection = document.querySelector('table');
    const btn = tableSection!.querySelector('.btn') as HTMLButtonElement;
    const getDetailSpy = spyOn(component, 'onGetDetail');
    btn.click();

    expect(getDetailSpy).toHaveBeenCalledWith(tasks[0].id);
  });
});
