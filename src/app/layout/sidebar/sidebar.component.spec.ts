import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create SideNav', () => {
    component.navData = [ {icon: "icon", label: "label", routeLink: "link"}];
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.SideNav');
    expect(element.localName).toBe('div');
    expect(element.childNodes[0].children[0].textContent).toContain("CRM ");
  });
  it('should create 1 button', () => {
    const element = fixture.nativeElement.querySelector('.SideNav');
    expect(element.querySelectorAll("button").length).toBe(1);
  });
});
