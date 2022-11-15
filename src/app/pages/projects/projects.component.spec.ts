import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { environment } from 'src/environments/environment';

import { ProjectsComponent } from './projects.component';
import { ProjectsModule } from './projects.module';
import { ProjectsService } from './projects.service';
@Injectable()
class ProjectServiceMock {
  projects$ = of([
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
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectsService: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [ProjectsModule, RouterTestingModule],
      providers: [
        { provide: ProjectsService, useClass: ProjectServiceMock },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
      ],
    }).compileComponents();

    window.history.pushState({ data: 1 }, '', '');
    fixture = TestBed.createComponent(ProjectsComponent);
    projectsService = TestBed.inject(ProjectsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabekl in projects Cards', () => {
    component.projects = [
      new Project({
        id: '1',
        people: ['Kacper Jan'],
        name: 'Name',
        description: 'discription',
        level: 'low',
        time: '2022-12-29',
        tasks: [
          { title: 'title', description: 'string', score: 0, stage: 'toDo' },
        ],
      }),
    ];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
