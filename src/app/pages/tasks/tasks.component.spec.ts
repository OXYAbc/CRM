import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Task } from 'src/app/models/tasks.model';
import { TasksComponent } from './tasks.component';
import { TasksModule } from './tasks.module';
import { TasksService } from './tasks.service';
@Injectable()
class TasksServiceMock {
  tasks$ = of([
    new Task({
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
      userId: '10',
    }),
  ]);
}

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let service: TasksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
      imports: [TasksModule, RouterTestingModule],
      providers: [
        { provide: HttpClient },
        { provide: TasksService, useClass: TasksServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should get data to tasks from Service', () => {
    expect(component.tasks).toEqual([
      new Task({
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
        userId: '10',
      }),
    ]);
  })
});
