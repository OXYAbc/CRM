import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from '@firebase/util';
import { Project } from 'src/app/models/projects.model';
import { Task } from 'src/app/models/tasks.model';
import { ProjectsService } from '../projects/projects.service';
import { TasksService } from '../tasks/tasks.service';
import { CardsDashboardComponent } from './cards-dashboard/cards-dashboard.component';

import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';
@Injectable()
class ProjectsServiceMock {
  projects$ = [{
          id: '1',
          name: 'Name1',
          people: ['Kacper Jakiś'],
          description: 'discription',
          level: 'low',
          time: '2022-12-29',
          tasks: [{title: "title", description: "string",
          score: 0,
          stage: "string",}],
        }]
}
@Injectable()
class TasksServiceMock {
  task$= [
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
  ];
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardModule],
      declarations: [DashboardComponent, CardsDashboardComponent],
      providers: [
        { provide: ProjectsService, useClass: ProjectsServiceMock },
        { provide: TasksService, useClass: TasksServiceMock },
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
