import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Project } from 'src/app/models/projects.model';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../projects.service';

import { CardsProjectsComponent } from './cards-projects.component';
import { CardsProjectsModule } from './cards-projects.module';
@Injectable()
class ProjectServiceMock {
  getProject(event: string): Observable<Project> {
    return of(
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
      })
    );
  }
  addProject(project: Project) {}
  setSearchWord(word: string) {}

  projects$: Observable<Project[]> = of([
    new Project({
      id: '1',
      people: ['Kacper Jan'],
      name: 'From Project',
      description: 'discription',
      level: 'low',
      time: '2022-12-29',
      tasks: [
        { title: 'title', description: 'string', score: 0, stage: 'toDo' },
      ],
    }),
  ]);
}

describe('CardsProjectsComponent', () => {
  let component: CardsProjectsComponent;
  let projects = [
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
  let fixture: ComponentFixture<CardsProjectsComponent>;
  let service: ProjectsService;
  const project: Project = new Project({
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
      declarations: [CardsProjectsComponent],
      imports: [RouterTestingModule, DialogModule, CardsProjectsModule, AppRoutingModule],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        { provide: ProjectsService, useClass: ProjectServiceMock },
        {
          provide: DialogRef,
          useValue: {
            close: (dialogResult: any) => {
              project;
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsProjectsComponent);
    component = fixture.componentInstance;
    component.projects = projects;
    service = TestBed.inject(ProjectsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show search input', () => {
    component.ShowSearch();
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    expect(search).toBeTruthy();
  });
  it('should show and hidden search input', () => {
    component.displaySearch = false;
    component.ShowSearch();
    fixture.detectChanges();
    expect(component.displaySearch).toBe(true);
    let search = fixture.nativeElement.querySelector("input[name='task name']");
    expect(search).toBeFalsy();
    component.ShowSearch();
    fixture.detectChanges();
    let searchtwo = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    expect(component.displaySearch).toBeFalsy();
    expect(searchtwo).toBeTruthy();
  });
  it('should called to show search func', () => {
    fixture.detectChanges();
    const buttonsSegment = fixture.nativeElement.querySelector(
      '.card-header-buttons'
    );
    const buttons = buttonsSegment.querySelectorAll('.btn');
    const buttonSerach = buttons[1];
    const searchShowSpy = spyOn(component, 'ShowSearch');
    buttonSerach.click();
    fixture.detectChanges();
    expect(searchShowSpy).toHaveBeenCalled();
    expect(buttonSerach).toBeTruthy();
  });
  it('should open add dialog', () => {
    const openSpy = spyOn(component, 'openAddDialog');
    component.displaySearch = false;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.btn');
    btn.click();
    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();
  });

  it('It should called with  to getProject', fakeAsync(() => {
    const tableSection = fixture.nativeElement.querySelector('table');
    const getProjectSpy = spyOn(service, 'getProject');
    const btn = tableSection.querySelector('.btn');
    btn.click();
    const getDetailSpy = spyOn(component, 'onGetDetail');
    component.onGetDetail(project.id);

    expect(getDetailSpy).toHaveBeenCalledWith(project.id);
    fixture.detectChanges();
    tick(200);
    expect(getProjectSpy).toHaveBeenCalled();
  }));

  it('should show empty data solution', () => {
    const emptyData = fixture.nativeElement.querySelector(
      '.project-detail-empty'
    );
    expect(emptyData).toBeTruthy();
  });

  it('should show data', () => {
    component.projectDetail = project;
    fixture.detectChanges();
    const emptyData = fixture.nativeElement.querySelector(
      '.project-detail-empty'
    );
    expect(emptyData).toBe(null);
  });

  it('should return no data', fakeAsync(() => {
    component.ShowSearch();
    component.projects = [];
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    search.value = null;
    fixture.detectChanges();
    expect(component.projects).toEqual([]);
  }));
  it('should test else variant', () => {
    component.projects = [];
    component.searchName = '';
    fixture.detectChanges();
  });
  it('should call to setSearchWord', () => {
    component.ShowSearch();
    fixture.detectChanges();
    const inputSearch = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    const searchWordSpy = spyOn(service, 'setSearchWord');

    inputSearch.value = 'From';
    inputSearch.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(searchWordSpy).toHaveBeenCalledWith('From');
  });
});
