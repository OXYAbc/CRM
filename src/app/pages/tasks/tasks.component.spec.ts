import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Task, Comment } from 'src/app/models/tasks.model';
import { TasksComponent } from './tasks.component';
import { TasksModule } from './tasks.module';
import { TasksService } from './tasks.service';

@Injectable()
class TaskServiceMock {
  task$ = ([new Task(
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
      )])
}
@Injectable()
class TaskMock {
  mapComments(comments: { user: string; comment: string }[]) {
    return (
      comments?.map((comment) => {
        return new Comment(comment);
      }) || []
    );
  }
}

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
      imports: [TasksModule],
      providers: [
        { provide: HttpClient },
        { provide: TasksService, useClass: TaskServiceMock },
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
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
function mapComments(comments: { user: string; comment: string }[]) {
  return (
    comments?.map((comment) => {
      return new Comment(comment);
    }) || []
  );
}
