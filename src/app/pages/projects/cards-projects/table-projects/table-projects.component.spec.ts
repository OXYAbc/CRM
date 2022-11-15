import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Project } from 'src/app/models/projects.model';

import { TableProjectsComponent } from './table-projects.component';

describe('TableProjectsComponent', () => {
  let component: TableProjectsComponent;
  let fixture: ComponentFixture<TableProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProjectsComponent],
      imports: [CdkTableModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableProjectsComponent);
    component = fixture.componentInstance;
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create buttons in table', () => {
    expect(component).toBeTruthy();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
  it('should call to get details', () => {
    expect(component).toBeTruthy();
    const btn = fixture.nativeElement.querySelector('.btn');
    const detailSpy = spyOn(component, 'showDetails');
    btn.click();
    expect(detailSpy).toHaveBeenCalled();
  });
  it('check value of click', () => {
    const btn = fixture.nativeElement.querySelector('.btn');
    spyOn(component.projectEmitter, 'emit');
    btn.click();
    expect(component.projectEmitter.emit).toHaveBeenCalledWith(
      component.projects[0].id
    );
  });
});
