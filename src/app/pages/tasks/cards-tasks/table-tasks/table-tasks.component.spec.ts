import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    component.DataItem = [
      {
        id: '1',
        name: 'adawdaw',
        discription: 'string',
        deadline: 'string',
        comments: [{ user: 'string', comments: ['string'] }],
        check: true,
        level: 'string',
      },
    ];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
