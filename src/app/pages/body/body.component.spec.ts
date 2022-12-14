import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SidebarModule } from 'src/app/layout/sidebar/sidebar.module';
import { LoginService } from 'src/app/login/login.service';
import { NavBar } from 'src/app/models/nav-bar.models';
import { DarkModeState } from 'src/app/shared/thememode.state';
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
  getFontSize(): Observable<any> {
    return of(10);
  }
}
@Injectable()
class LoginServiceMock{
  getUser(){
    return of()
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
        NgxsModule.forRoot([DarkModeState])

      ],
      providers: [{ provide: BodyService, useClass: BodyServiceMock },
      {provide: LoginService, useClass: LoginServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
