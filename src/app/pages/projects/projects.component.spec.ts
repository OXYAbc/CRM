import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ProjectsData } from 'src/app/models/projects.model';

import { ProjectsComponent } from './projects.component';
import { ProjectsModule } from './projects.module';
import { ProjectsService } from './projects.service';

@Injectable()
class ProjectsServiceMock {
  getData(): Observable<ProjectsData[]> {
    return of([{id: 1,
      name: "Name1",
      people:["Kacper Jakiś"],
      discription: "discription",
      level: "low",
      time: "2022-12-29"}]);
  }
}

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [ProjectsModule, RouterTestingModule],
      providers: [{ provide: ProjectsService, useClass: ProjectsServiceMock }],
    }).compileComponents();

    window.history.pushState({ data: 1}, '', '');
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabekl in projects Cards', () => {
    component.dataItem = [
      {
        id: 1,
        people: ['Kacper Jan'],
        name: 'Name',
        discription: 'discription',
        level: 'low',
        time: '2022-12-29',
      },
    ];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
