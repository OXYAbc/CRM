import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckStage } from 'src/app/@theme/app-check-stage.directive';
import { TitleProgress } from 'src/app/@theme/app-title-progress.directive';
import { Project } from 'src/app/models/projects.model';

import { ProgressCardComponent } from './progress-cards.component';

describe('ProgressCardComponent', () => {
  let component: ProgressCardComponent;
  let fixture: ComponentFixture<ProgressCardComponent>;
  const projects: Project[] = [
    new Project({
      id: '1',
      people: ['Kacper Jan'],
      name: 'Name',
      description: 'description',
      level: 'low',
      time: '2022-12-29',
      tasks: [
        { title: 'start', description: 'string', score: 100, stage: 'toDo' },
      ],
    }),
  ];

  async function runOnPushChangeDetection<T>(cf: ComponentFixture<T>) {
    const cd = cf.debugElement.injector.get<ChangeDetectorRef>(
      ChangeDetectorRef as any
    );
    cd.markForCheck();
    cd.detectChanges();
    await cf.whenStable();
    return;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressCardsComponent, CheckStage, TitleProgress],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressCardComponent);
    component = fixture.componentInstance;
    component.projects = projects;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabs', () => {
    const tabs = fixture.nativeElement.querySelectorAll('.card-progress');
    expect(tabs.length).toBe(1);
  });
  it('should create tabs with data', () => {
    const tab = fixture.nativeElement.querySelector('.card-progress');
    const titleProject = tab.querySelector('.card-progress-header');
    expect(titleProject.textContent).toBe('Project Name');
    const descriptionProject = tab.querySelector('.card-progress-description');
    expect(descriptionProject.textContent).toBe('description');
    const personsOfProject = tab.querySelectorAll('.person');
    expect(personsOfProject.length).toBe(1);
    const personOfProject = tab.querySelector('.person-avatar');
    expect(personOfProject.title).toBe('Kacper Jan');
  });
  it('should create progress bubble with text', () => {
    const bubble = fixture.nativeElement.querySelector(
      '.card-progress-header-stage'
    );
    expect(bubble.title).toBe(
      'Project complited✔ in 0.00 %, tasks to do: 🟧100.00 %, in progress 🟨0.00 %, in review 🟩0.00 %'
    );
  });
  it('should create bubble with number of tasks ', fakeAsync(async () => {
    component.projects = [
      new Project({
        id: '5',
        people: ['Dam Małysz'],
        name: 'Name',
        description: 'description',
        level: 'low',
        time: '2022-12-29',
        tasks: [
          {
            title: 'todo task',
            description: 'string',
            score: 10,
            stage: 'toDo',
          },
          {
            title: 'text',
            description: 'string',
            score: 0,
            stage: 'inProgress',
          },
          {
            title: 'simple',
            description: 'string',
            score: 0,
            stage: 'inReview',
          },
          { title: 'next', description: 'string', score: 0, stage: 'done' },
        ],
      }),
    ];
    await runOnPushChangeDetection(fixture);
    const bubble = fixture.nativeElement.querySelector('.tasks-number');
    expect(bubble.title).toBe('The project has 4 tasks');
  }));
  it('should create progress bar', fakeAsync(async () => {
    component.projects = [
      new Project({
        id: '5',
        people: ['Dam Małysz'],
        name: 'Name',
        description: 'description',
        level: 'low',
        time: '2022-12-29',
        tasks: [
          {
            title: 'todo task',
            description: 'string',
            score: 10,
            stage: 'toDo',
          },
          {
            title: 'text',
            description: 'string',
            score: 0,
            stage: 'inProgress',
          },
          {
            title: 'simple',
            description: 'string',
            score: 0,
            stage: 'inReview',
          },
          { title: 'next', description: 'string', score: 0, stage: 'done' },
          { title: 'next', description: 'string', score: 0, stage: 'brak' },
        ],
      }),
    ];
    await runOnPushChangeDetection(fixture);
    const stages = fixture.nativeElement.querySelectorAll('.stages');
    expect(stages.length).toBe(5);
  }));
  it('should create boxes of tasks in single project', () => {
    const tasks = fixture.nativeElement.querySelectorAll('.task');
    expect(tasks.length).toBe(1);
  });
});
