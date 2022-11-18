import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Task } from 'src/app/models/tasks.model';
import { TableModule } from 'src/app/shared/components/table/table.module';

import { NotfCardComponent } from './notf-card.component';
import { NotfCardsModule } from './notf-card.module';

describe('NotfCardComponent', () => {
  let component: NotfCardComponent;
  let fixture: ComponentFixture<NotfCardComponent>;
  const tasks: Task[] = [
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
      added: new Date().toJSON().slice(0, 10),
    }),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotfCardComponent],
      imports: [
        CommonModule,
        RouterTestingModule,
        NotfCardsModule,
        CdkTableModule,
        TableModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotfCardComponent);
    component = fixture.componentInstance;
    component.tasks = tasks;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.tasks = tasks;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should dispaly no data template', () => {
    component.tasks = [];
    fixture.detectChanges();
    const noDataBox = fixture.nativeElement.querySelector(
      '.card-nottfication-empty'
    );
    expect(noDataBox).toBeTruthy();
  });
  it("shouldn't dispaly outdated data template", () => {
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
        added: '2022-10-02',
      }),
    ];
    fixture.detectChanges();
    const noDataBox = fixture.nativeElement.querySelector(
      '.card-nottfication-empty'
    );
    expect(noDataBox).toBeTruthy();
  });
  it('should dispaly table', () => {
    const tableTasks = fixture.nativeElement.querySelector('table');
    expect(tableTasks).toBeTruthy();
  });
  it('should dispaly one position in table', () => {
    const tBody = fixture.nativeElement.querySelector('tbody');
    expect(tBody.children.length).toBe(1);
  });
  it('should dispaly data of position in table', () => {
    const tBody = fixture.nativeElement.querySelector('tbody');
    const titleTask = tBody.querySelector('.cdk-column-name');
    expect(titleTask.textContent).toBe('Simple Task');
    const discriptionTask = tBody.querySelector('.cdk-column-description');
    expect(discriptionTask.textContent).toBe('Lorem ipsum');
    const viewMore = tBody.querySelector('.cdk-column-viewMore');
    expect(viewMore.textContent).toBe(' Show more ');
  });
});
