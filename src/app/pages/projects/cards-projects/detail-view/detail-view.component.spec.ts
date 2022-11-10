import { DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Project, Task } from 'src/app/models/projects.model';
import { ProjectsService } from '../../projects.service';

import { DetailViewComponent } from './detail-view.component';
@Injectable()
class ProjectServiceMock {
  updateTasks(tablica: Task[], id: string) {
    return true;
  }
}

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;
  let service: ProjectsService;
  let project: Project = new Project({
    id: '1',
    people: ['Kacper Jan'],
    name: 'Name',
    description: 'discription',
    level: 'low',
    time: '2022-12-29',
    tasks: [{ title: 'title', description: 'string', score: 0, stage: 'toDo' }],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DetailViewComponent],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: ProjectsService, useClass: ProjectServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProjectsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render detailsView of Data', () => {
    component.project = project;
    fixture.detectChanges();
    const detail = fixture.nativeElement.querySelector('.detail');
    expect(detail.children.length).toBe(2);

    const headerDetail = detail.querySelector('.detail-header');
    expect(headerDetail.textContent.length).toBeGreaterThan(0);
  });
  it('should call to sendArray method', () => {
    const sendArraySpy = spyOn(component, 'sendArray');
    component.project = project;
    fixture.detectChanges();
    const tasklevel = fixture.nativeElement.querySelector(
      '.card-content-level'
    );
    const buttons = tasklevel.querySelectorAll('.btn');
    const scoreUpBtn = buttons[0];
    const scoreDownBtn = buttons[1];
    scoreUpBtn.click();
    expect(component.project.tasks[0].score).toBe(1);
    scoreDownBtn.click();
    expect(component.project.tasks[0].score).toBe(0);
    expect(sendArraySpy).toHaveBeenCalled();
  });
  it('should call to updateTask method', () => {
    const updateTasksSpy = spyOn(service, 'updateTasks');
    component.project = project;
    fixture.detectChanges();
    component.sendArray();
    expect(updateTasksSpy).toHaveBeenCalledWith([new Task({ title: 'title', description: 'string', stage: 'toDo', score: 0 })], '1');
  });
});
