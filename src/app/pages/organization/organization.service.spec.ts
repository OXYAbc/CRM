import { Injectable } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { collection } from '@firebase/firestore';
import { of } from 'rxjs';
import { Organization } from 'src/app/models/organization.model';
import { User } from 'src/app/models/user.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UsersService } from '../users/users.service';
import { OrganizationModule } from './organization.module';
import { OrganizationService } from './organization.service';

@Injectable()
class userServiceMock {
  addUser(user: User) {}
  getUserRole(id: string) {
    return of('Admin');
  }
  setOrganization(uid: string, id: string) {}
  getUser(id: string) {
    return of(
      new User({
        id: '1',
        firstName: 'Krish',
        lastName: 'Lee',
        phoneNumber: 123456,
        emailAddress: 'krish.lee@learningcontainer.com',
        position: 'Line Manager',
        departament: 'Digital',
        manager: 'Agata Janda',
        score: 5,
        organization: '10',
      })
    );
  }
}

describe('Org Service', () => {
  let service: OrganizationService;
  let userService: UsersService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        OrganizationModule,
        BrowserDynamicTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'pages/dashboard', component: DashboardComponent },
        ]),
        DashboardModule,
      ],
      providers: [
        OrganizationService,
        { provide: UsersService, useClass: userServiceMock },
        {
          provide: AngularFirestore,
          useValue: {
            collection: (name: string) => {
              return {
                add: (text: string) => Promise.resolve({ id: '10' }),
                doc: () => {
                  return {
                    get: () => of({ exists: true }),
                    collection: () => {
                      return {
                        add: (text: string) => Promise.resolve({ id: '10' }),
                      };
                    },
                  };
                },
              };
            },
          },
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    });
    service = TestBed.inject(OrganizationService);
    userService = TestBed.inject(UsersService);
    router = TestBed.get(Router);
    service.organizationId = '';

  });

  it('should navigate to the dashboard if the organization exists', fakeAsync(() => {
    const id = '10';
    service.setOrganization(id);
    expect(service.organizationId).toEqual(id);
    tick();
    expect(router.navigate).toHaveBeenCalledWith(['pages/dashboard']);
  }));
  it('should call to subscription.unsubscribe', () => {
    service.ngOnDestroy();
  });
  it('should set orgId and call to userService.setOrg', fakeAsync(() => {
    service.createOgranization({} as Organization, 'id');
    tick();
    expect(service.organizationId).toBe('10');
    expect(router.navigate).toHaveBeenCalledWith(['pages/dashboard']);
  }));
  it('should test joinToOrganization', fakeAsync(() => {
    service.organizationId = '';
    service.joinToOrganization('id', 'uid');
    tick();
    expect(service.organizationId).toBe('id');
  }));
});
