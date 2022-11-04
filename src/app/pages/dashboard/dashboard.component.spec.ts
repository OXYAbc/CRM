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

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const tasksService: TasksService = jasmine.createSpyObj('TasksService', [
    'tasks$',
  ]);
  const projectsService: ProjectsService = jasmine.createSpyObj(
    'ProjectsService',
    ['projects$']
  );
  projectsService.project$ = of([
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
  tasksService.tasks$ = of([
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
    }),
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule, RouterTestingModule],
      declarations: [DashboardComponent, CardsDashboardComponent],
      providers: [
        { provide: ProjectsService, useValue: projectsService },
        { provide: TasksService, useValue: tasksService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
