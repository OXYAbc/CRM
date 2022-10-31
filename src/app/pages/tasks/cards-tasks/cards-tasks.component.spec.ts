import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideDatabase } from '@angular/fire/database';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { Observable, of } from 'rxjs';
import { Comment, Task } from 'src/app/models/tasks.model';
import { environment } from 'src/environments/environment';
import { TasksService } from '../tasks.service';

import { CardsTasksComponent } from './cards-tasks.component';
import { CardsTasksModule } from './cards-tasks.module';
@Injectable()
class TasksServiceMock {
  task$= [new Task(
    {
      check: true,
      comments: [
        {
          user: 'Kuba Pasek Łyń',
          comment: 'Potrzebna modernicacja w tytule taska',
        },
      ],
      deadline: '2022-12-31',
      description: 'Lorem ipsum',
      id: '1',
      level: 'low',
      name: 'Simple Task',
      added: '2022-12-31',
    },
  )];
}
@Injectable()
class TaskServiceMock {
  getTask(): Observable<Task> {
    return of(new Task({
        id: '1',
        name: 'Simple Task',
        description: 'string',
        deadline: '2022-12-31',
        comments: [{ user: 'string', comment: 'string' }],
        check: true,
        level: 'string',
        added: '1999-01-12'
  }));
  }
}

describe('CardsTasksComponent', () => {
  let component: CardsTasksComponent;
  let fixture: ComponentFixture<CardsTasksComponent>;
  let service: Dialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardsTasksModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [CardsTasksComponent],
      providers: [
        Dialog,
        { provide: TasksService, useClass: TasksServiceMock },
        { provide: TasksService, useClass: TaskServiceMock },
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsTasksComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(Dialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open dialog window', () => {
    const openDialogSpy = spyOn(service, 'open');
    component.openDialog();
    fixture.detectChanges();
    expect(openDialogSpy).toHaveBeenCalled();
  });
  it('should creat tabel', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table.tagName).toBe('TABLE');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
  it('buttons should have text Show more', () => {
    component.tasks = [new Task(
        {
          check: true,
          comments: [
            {
              user: 'Kuba Pasek Łyń',
              comment: 'Potrzebna modernicacja w tytule taska',
            },
          ],
          deadline: '2022-12-31',
          description: 'Lorem ipsum',
          id: '1',
          level: 'low',
          name: 'Simple Task',
          added: '2022-12-31',
        },
      )];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons[0].textContent).toBe('Show more');
  });
  it('should creat buttons in list in table', () => {
    component.tasks = [new Task(
        {
          check: true,
          comments: [
            {
              user: 'Kuba Pasek Łyń',
              comment: 'Potrzebna modernicacja w tytule taska',
            },
          ],
          deadline: '2022-12-31',
          description: 'Lorem ipsum',
          id: '1',
          level: 'low',
          name: 'Simple Task',
          added: '2022-12-31',
        },
      )];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
  it('should open the tabel component, with data ', () => {
    component.tasks = [new Task(
        {
          check: true,
          comments: [
            {
              user: 'Kuba Pasek Łyń',
              comment: 'Potrzebna modernicacja w tytule taska',
            },
          ],
          deadline: '2022-12-31',
          description: 'Lorem ipsum',
          id: '1',
          level: 'low',
          name: 'Simple Task',
          added: '2022-12-31',
        },
      )];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-table-tasks')).not.toBe(null);
  });
  it('should have the other component with detail view', () => {
    component.getDetail(new Task({
        id: '1',
        name: 'Simple Task',
        description: 'string',
        deadline: '2022-12-29',
        comments: [{ user: 'string', comment: 'string' }],
        check: true,
        level: 'string',
        added: '1999-01-12'
  }));
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-detail-view')).not.toBe(null);
  });
});
