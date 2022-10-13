import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SidebarModule } from 'src/app/layout/sidebar/sidebar.module';
import { ProjectsData } from 'src/app/models/projects.model';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ProjectsModule } from '../projects/projects.module';
import { TasksModule } from '../tasks/tasks.module';
import { UsersModule } from '../users/users.module';

import { BodyComponent } from './body.component';
import { BodyService } from './body.service';

@Injectable()
class BodyServiceMock {
  getData(): Observable<ProjectsData[]> {
    return of([
      {
        id: 1,
        name: 'Name1',
        people: ['Kacper Jakiś'],
        discription: 'discription',
        level: 'low',
        time: '30.11.2022',
      },
    ]);
  }
}

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyComponent],
      imports: [
        ProjectsModule,
        TasksModule,
        UsersModule,
        DashboardModule,
        SidebarModule,
        HeaderModule,
        RouterTestingModule,
      ],
      providers: [{ provide: BodyService, useClass: BodyServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
