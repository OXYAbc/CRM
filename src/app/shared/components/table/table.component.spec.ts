import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Task } from 'src/app/models/tasks.model';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let displayedColumns: string[] = ['name', 'description', 'viewMore'];
  let columnDef = [
    {
      cdkColumnDef: 'name',
      cdkColumnDefTitle: 'Title',
    },
    {
      cdkColumnDef: 'description',
      cdkColumnDefTitle: 'Description',
    },
    {
      cdkColumnDef: 'time',
      cdkColumnDefTitle: 'Deadline',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkTableModule, RouterTestingModule, AppRoutingModule],
      declarations: [TableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.columnDef = columnDef;
    component.displayedColumns = displayedColumns;
    component.category = 'tasks';
    component.data = [
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
        userId:'01'
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
    spyOn(component.eventEmitt, 'emit');
    btn.click();
    expect(component.eventEmitt.emit).toHaveBeenCalledWith(
      component.data[0].id
    );
  });
});
