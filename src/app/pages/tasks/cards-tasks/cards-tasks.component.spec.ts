import { Dialog } from '@angular/cdk/dialog';
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
import { Task } from 'src/app/models/tasks.model';
import { environment } from 'src/environments/environment';
import { TasksService } from '../tasks.service';

import { CardsTasksComponent } from './cards-tasks.component';
import { CardsTasksModule } from './cards-tasks.module';
@Injectable()
class TasksServiceMock {
  getTasks(): Observable<Task[]> {
    return of([
      {
        id: '1',
        name: 'Simple Tasks',
        discription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare odio ut nibh placerat consequat vitae in felis. Ut hendrerit accumsan dolor vitae fermentum. Proin quis suscipit erat, a ultrices diam. Sed ut mattis massa, a accumsan lectus. Nam faucibus ligula eget risus faucibus dapibus. Fusce vitae laoreet mi, quis porttitor est. Nunc elementum nisi posuere metus interdum iaculis. Maecenas elit diam, rutrum eget nisl quis, tincidunt ultricies ante. Nulla vitae suscipit mauris, sit amet luctus erat. Vestibulum nec mauris ac massa sodales pharetra. Curabitur vitae ligula varius, mattis purus eu, eleifend ligula. Nullam posuere tortor nisi, maximus volutpat nibh maximus nec. Phasellus tristique vitae justo semper pulvinar. Pellentesque felis lorem, euismod fringilla auctor sed, finibus ac turpis. Nunc eleifend vel mauris id iaculis. Etiam et feugiat tortor.',
        deadline: '2022-12-31',
        comments: [
          {
            user: 'Kuba Pasek Łyń',
            comments: ['Potrzebna modernicacja w tytule taska'],
          },
        ],
        check: true,
        level: 'low',
        title: 'string',
      },
    ]);
  }
}
@Injectable()
class TaskServiceMock {
  getTask(): Observable<Task> {
    return of({
      id: '1',
      name: 'Simple Tasks',
      discription: 'Lorem ipsum',
      deadline: '2022-12-31',
      comments: [
        {
          user: 'Kuba Pasek Łyń',
          comments: ['Potrzebna modernicacja w tytule taska'],
        },
      ],
      check: true,
      level: 'low',
      title: 'Simple Task',
    });
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
    component.dataItem = [
      {
        id: '1',
        name: 'adawdaw',
        discription: 'string',
        deadline: 'string',
        comments: [{ user: 'string', comments: ['string'] }],
        check: true,
        level: 'string',
      },
    ];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons[0].textContent).toBe('Show more');
  });
  it('should creat buttons in list in table', () => {
    component.dataItem = [
      {
        id: '1',
        name: 'adawdaw',
        discription: 'string',
        deadline: 'string',
        comments: [{ user: 'string', comments: ['string'] }],
        check: true,
        level: 'string',
      },
    ];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
  it('open detailView', () => {
    component.getDetail({
      check: true,
      comments: [
        {
          user: 'Kuba Pasek Łyń',
          comments: ['Potrzebna modernicacja w tytule taska'],
        },
      ],
      deadline: '2022-12-31',
      discription: 'Lorem ipsum',
      id: '1',
      level: 'low',
      name: 'Simple Task',
    });
    fixture.detectChanges();
    const detailView = fixture.nativeElement.querySelector('.detail');
    expect(detailView.nodeName).toBe('DIV');
    const headerDetail = detailView.querySelector('h2');
    expect(headerDetail.textContent).toBe('Simple Task');
    const discription = detailView.querySelector('.discription');
    const discriptionContent = discription.querySelector('.discriptionContent');
    expect(discriptionContent.textContent).toBe(' Lorem ipsum ');
  });
  it('should open the tabel component, with data ', () => {
    component.dataItem = [
      {
        id: '1',
        name: 'adawdaw',
        discription: 'string',
        deadline: 'string',
        comments: [{ user: 'string', comments: ['string'] }],
        check: true,
        level: 'string',
      },
    ];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-table-tasks')).not.toBe(null);
  });
  it('should have the other component with detail view', () => {
    component.getDetail({
      id: '1',
      name: 'adawdaw',
      discription: 'string',
      deadline: 'string',
      comments: [{ user: 'string', comments: ['string'] }],
      check: true,
      level: 'string',
    });
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-detail-view')).not.toBe(null);
  });
});
