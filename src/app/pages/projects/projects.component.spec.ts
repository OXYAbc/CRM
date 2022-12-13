import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { Project } from 'src/app/models/projects.model';
import { User } from 'src/app/models/user.model';
import { Login } from 'src/app/shared/login.action';
import { UserState } from 'src/app/shared/user.state';
import { UserStateModule } from 'src/app/shared/user.state.module';
import { UsersService } from '../users/users.service';

import { ProjectsComponent } from './projects.component';
import { ProjectsModule } from './projects.module';
import { ProjectsService } from './projects.service';
@Injectable()
class ProjectServiceMock {
  projects$ = of([
    new Project({
      id: '1',
      name: 'Name1',
      people: ['Kacper Jakiś'],
      description: 'discription',
      level: 'low',
      time: '2022-12-29',
      tasks: [
        { title: 'title', description: 'string', score: 0, stage: 'string' },
      ],
    }),
  ]);
}
@Injectable()
class UsersServiceMock {
  getUserRole(id: string) {
    return of('Admin');
  }
  user$ = of([
    new User({
      id: '1',
      firstName: 'Ada',
      lastName: 'Mock',
      phoneNumber: 987456321,
      emailAddress: 'krish.lee@learningcontainer.com',
      position: 'Intern',
      departament: 'Digital',
      manager: 'Krystyna Janda',
      score: 5,
      organization: '10'
    }),
  ])
}
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let projectsService: ProjectsService;
  let store: Store;


  const userState: UserState = new UserState();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [ProjectsModule, RouterTestingModule, UserStateModule],
      providers: [
        { provide: ProjectsService, useClass: ProjectServiceMock },
        { provide: UsersService, useClass: UsersServiceMock },
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(ProjectsComponent);
    projectsService = TestBed.inject(ProjectsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store.reset(Login);

  });

  it('should create create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabekl in projects Cards', () => {
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
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
