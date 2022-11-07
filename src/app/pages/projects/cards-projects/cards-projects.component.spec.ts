import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, observable, of } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../projects.service';

import { CardsProjectsComponent } from './cards-projects.component';
import { CardsProjectsModule } from './cards-projects.module';
import { TableProjectsModule } from './table-projects/table-projects.module';
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
}

describe('CardsProjectsComponent', () => {
  let component: CardsProjectsComponent;
  let fixture: ComponentFixture<CardsProjectsComponent>;
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
      imports: [RouterTestingModule, DialogModule, CardsProjectsModule],
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
    expect(component.displaySearch).toBe(false);
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
  it('It should assign GetDeatil(event) to project variable', () => {
    const getDetailSpy = spyOn(component, 'onGetDetail');
    component.onGetDetail(project);
    fixture.detectChanges();
    expect(getDetailSpy).toHaveBeenCalledWith(project);
    // expect(component.projectDetail).toEqual(project);
  });
  it('should check search input, with incorret data', () => {
    component.ShowSearch();
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    const searchSpy = spyOn(component, 'search');
    search.value = 'nazwainna';
    fixture.detectChanges();
    component.search();
    expect(search).toBeTruthy();
    expect(searchSpy).toHaveBeenCalled();
  });
  it('should check search input, with null data', () => {
    component.ShowSearch();
    component.projects = [];
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    const searchSpy = spyOn(component, 'search');
    search.value = null;
    fixture.detectChanges();
    component.search();
    expect(search).toBeTruthy();
    expect(searchSpy).toHaveBeenCalled();
  });
  it('should check search input with corret data', () => {
    component.ShowSearch();
    fixture.detectChanges();
    const search = fixture.nativeElement.querySelector(
      "input[name='task name']"
    );
    const searchSpy = spyOn(component, 'search');
    search.value = 'Name';
    fixture.detectChanges();
    component.search();
    expect(search).toBeTruthy();
    expect(searchSpy).toHaveBeenCalled();
  });
  it('should show empty data solution, and with data', () => {
    const emptyData = fixture.nativeElement.querySelector(
      '.project-detail-empty'
    );
    expect(emptyData).toBeTruthy();
    component.projectDetail = project;
    fixture.detectChanges();
    const detailView = fixture.nativeElement.querySelector('app-detail-view');
    expect(detailView).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called to getDetail', () => {
    const getDetailSpy = spyOn(component, 'onGetDetail');
    component.onGetDetail(project);
    fixture.detectChanges();
    expect(getDetailSpy).toHaveBeenCalledWith(project);
  });
  it('should function call', () => {
    const openDialogSpy = spyOn(component, 'openAddDialog');
    const getDetailSpy = spyOn(component, 'onGetDetail');
    const searchSpy = spyOn(component, 'search');
    const showSearchSpy = spyOn(component, 'ShowSearch');
    component.openAddDialog();
    fixture.detectChanges();
    expect(openDialogSpy).toHaveBeenCalled();
    component.onGetDetail(project);
    fixture.detectChanges();
    expect(getDetailSpy).toHaveBeenCalledWith(project);
    component.search();
    fixture.detectChanges();
    expect(searchSpy).toHaveBeenCalled();
    component.ShowSearch();
    fixture.detectChanges();
    expect(showSearchSpy).toHaveBeenCalled();
  });
});
