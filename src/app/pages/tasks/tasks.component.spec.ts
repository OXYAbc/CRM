import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { TasksData } from 'src/app/models/tasks.model';
import { TasksComponent } from './tasks.component';
import { TasksModule } from './tasks.module';
import { TasksService } from './tasks.service';

@Injectable()
class TaskServiceMock {
  getData(): Observable<TasksData[]> {
    return of([
      {
        id: 1,
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
      },
    ]);
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
    component.dataItem = [
      {
        check: true,
        comments: [
          {
            user: 'Kuba Pasek Łyń',
            comments: ['Potrzebna modernicacja w tytule taska'],
          },
        ],
        deadline: '2022-12-31',
        discription: 'Lorem ipsum',
        id: 1,
        level: 'low',
        name: 'Simple Task',
      },
    ];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
