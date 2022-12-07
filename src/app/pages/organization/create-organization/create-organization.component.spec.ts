import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizationComponent } from './create-organization.component';

describe('CreateOrganizationComponent', () => {
  let component: CreateOrganizationComponent;
  let fixture: ComponentFixture<CreateOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrganizationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call resetForm', () => {
    spyOn(component, 'resetForm');
    component.resetForm();
    expect(component.resetForm).toHaveBeenCalled();
  });

  it('should call onSubmit', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should call closeDialog', () => {
    spyOn(component, 'closeDialog');
    component.closeDialog();
    expect(component.closeDialog).toHaveBeenCalled();
  });
});
