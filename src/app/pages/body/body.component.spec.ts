import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SidebarModule } from 'src/app/layout/sidebar/sidebar.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ProjectsModule } from '../projects/projects.module';
import { TasksModule } from '../tasks/tasks.module';
import { UsersModule } from '../users/users.module';

import { BodyComponent } from './body.component';
import { BodyModule } from './body.module';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      imports: [ProjectsModule, TasksModule, UsersModule, DashboardModule, SidebarModule, HeaderModule,HttpClientTestingModule, RouterTestingModule],
      providers:[
        { provide: HttpClient },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
