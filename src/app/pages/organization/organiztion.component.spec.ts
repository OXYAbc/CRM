import { DialogModule } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Organization } from 'src/app/models/organization.model';
import { User } from 'src/app/models/user.model';
import { CardsModule } from 'src/app/shared/card.module';
import { UsersService } from '../users/users.service';
import { OrganizationComponent } from './organization.component';
import { OrganizationService } from './organization.service';

@Injectable()
export class OrganizationServiceMock {
  setOrganization(id: string) {}
  joinToOrganization(id: string, uid: string) {}
  createOgranization(org: Organization, uid: string) {}
}
@Injectable()
class UserServiceMock {
  addUser(user: User) {}
  getUserRole(id: string) {
    return of('Admin');
  }
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
        organization: '',
      })
    );
  }
}

describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;
  let service: OrganizationService;
  let route: ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationComponent],
      imports: [
        DialogModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        CardsModule,
      ],
      providers: [
        { provide: OrganizationService, useClass: OrganizationServiceMock },
        { provide: UsersService, useClass: UserServiceMock },
      ],
    }).compileComponents();
    route = new ActivatedRoute();
    route.snapshot = {
      params: {
        id: 'value',
      }
    } as any;


    fixture = TestBed.createComponent(OrganizationComponent);
    service = TestBed.inject(OrganizationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onCreateOrganization', () => {
    spyOn(component, 'onCreateOrganization');
    component.onCreateOrganization();
    expect(component.onCreateOrganization).toHaveBeenCalled();
  });
  it('should call onJoinOrganization', () => {
    spyOn(component, 'onJoinOrganization');
    component.onJoinOrganization();
    expect(component.onJoinOrganization).toHaveBeenCalled();
  });
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('should join user to organization on submit', () => {
    spyOn(service, 'joinToOrganization');
    component.onJoinOrganization();
    expect(service.joinToOrganization).toHaveBeenCalled();
  });
  it('should emit the correct event when join organization is clicked', () => {
    component.organization = false;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    input.value = '01';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    spyOn(component, 'onJoinOrganization');
    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    button.click();
    expect(component.onJoinOrganization).toHaveBeenCalled();
  });

  it('should emit the correct event when create organization is clicked', () => {
    component.organization = false;
    fixture.detectChanges();
    spyOn(component, 'onCreateOrganization');
    const button = fixture.nativeElement.querySelectorAll('button')[1];
    button.click();
    expect(component.onCreateOrganization).toHaveBeenCalled();
  });
  it('should open dialog and create organization', () => {
    component.onCreateOrganization();
    const dialog = document.querySelector('app-create-organization');
    const inputName = dialog?.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const description = dialog?.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;
    const btn = dialog?.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;

    expect(dialog).toBeTruthy();
  });
});
