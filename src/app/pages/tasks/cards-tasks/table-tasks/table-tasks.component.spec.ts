import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Task } from 'src/app/models/tasks.model';

import { TableTasksComponent } from './table-tasks.component';

describe('TableTasksComponent', () => {
  let component: TableTasksComponent;
  let fixture: ComponentFixture<TableTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkTableModule, RouterTestingModule, AppRoutingModule],
      declarations: [TableTasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableTasksComponent);
    component = fixture.componentInstance;
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should creat buttons in list in table', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
  it('should call to get details', () => {
    expect(component).toBeTruthy();
    const btn = fixture.nativeElement.querySelector('.btn');
    const detailSpy = spyOn(component, 'onShowDetails');
    btn.click();
    expect(detailSpy).toHaveBeenCalled();
  });
  it('check value of click', () => {
    const btn = fixture.nativeElement.querySelector('.btn');
    spyOn(component.showDetail, 'emit');
    btn.click();
    expect(component.showDetail.emit).toHaveBeenCalledWith(component.tasks[0].id);
  });
});
