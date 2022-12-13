import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { Task } from 'src/app/models/tasks.model';
import { ProjectsService } from '../projects/projects.service';
import { TasksService } from '../tasks/tasks.service';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
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
      userId: '10'
    }),
  ]);
}
@Injectable()
class ProjectServiceMock {
  project$ = of([
    new Project({
      id: '1',
      name: 'Name1',
      people: ['Kacper Jakiś'],
      description: 'discription',
      level: 'low',
      time: '2022-12-29',
      tasks: [
        { title: 'title', description: 'string', score: 0, stage: 'string' },
      ],
    }),
  ]);
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let taskService: TasksService;
  let projectsService: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule, RouterTestingModule],
      declarations: [DashboardComponent, CardsDashboardComponent],
      providers: [
        { provide: ProjectsService, useClass: ProjectServiceMock },
        { provide: TasksService, useClass: TasksServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    taskService = TestBed.inject(TasksService);
    projectsService = TestBed.inject(ProjectsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
