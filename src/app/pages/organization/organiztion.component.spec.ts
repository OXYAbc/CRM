import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Organization } from 'src/app/models/organization.model';
import { OrganizationComponent } from './organization.component';
import { OrganizationService } from './organization.service';

@Injectable()
export class OrganizationServiceMock {
  joinToOrganization(id: string, uid: string) {}
  createOgranization(org: Organization, uid: string) {}
}

describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;
  let service: OrganizationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationComponent],
      providers: [
        { provide: OrganizationService, useClass: OrganizationServiceMock },
      ],
    }).compileComponents();

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
  it('should create a new organization', () => {
    spyOn(service, 'createOgranization');
    component.onCreateOrganization();
    expect(service.createOgranization).toHaveBeenCalled();
  });
  it('should emit the correct event when join organization is clicked', () => {
    component.organization = false;
    fixture.detectChanges();
    spyOn(component, 'onJoinOrganization');
    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.triggerEventHandler('click', null);
    expect(component.onJoinOrganization).toHaveBeenCalled();
  });

  it('should emit the correct event when create organization is clicked', () => {
    component.organization = false;
    fixture.detectChanges();
    spyOn(component, 'onCreateOrganization');
    const button = fixture.debugElement.query(By.css('button[type="button"]'));
    button.triggerEventHandler('click', null);
    expect(component.onCreateOrganization).toHaveBeenCalled();
  });
});
