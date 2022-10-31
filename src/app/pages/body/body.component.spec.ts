import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { observable, Observable, of } from 'rxjs';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SidebarModule } from 'src/app/layout/sidebar/sidebar.module';
import { NavBar } from 'src/app/models/nav-bar.models';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ProjectsModule } from '../projects/projects.module';
import { TasksModule } from '../tasks/tasks.module';
import { UsersModule } from '../users/users.module';

import { BodyComponent } from './body.component';
import { BodyService } from './body.service';

@Injectable()
class BodyServiceMock {
  getData(): Observable<NavBar[]> {
    return of([
      {
        routeLink: 'string',
        icon: 'string',
        label: 'string',
      },
    ]);
  }
  getFontSize(): Observable<any>{
    return of(10)
  }
};



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


