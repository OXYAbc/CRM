import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from 'src/app/models/tasks.model';

import { TableTasksComponent } from './table-tasks.component';

describe('TableTasksComponent', () => {
  let component: TableTasksComponent;
  let fixture: ComponentFixture<TableTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkTableModule],
      declarations: [TableTasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should creat buttons in list in table', () => {
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
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
