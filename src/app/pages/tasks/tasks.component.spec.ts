import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Task, Comment } from 'src/app/models/tasks.model';
import { TasksComponent } from './tasks.component';
import { TasksModule } from './tasks.module';
import { TasksService } from './tasks.service';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  const tasksService: TasksService = jasmine.createSpyObj('Tasks Service', [
    'tasks$',
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
      declarations: [TasksComponent],
      imports: [TasksModule],
      providers: [
        { provide: HttpClient },
        { provide: TasksService, useValue: tasksService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabel in tasks Cards', () => {
    component.tasks = [
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
    ];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
