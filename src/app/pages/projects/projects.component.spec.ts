import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsModule } from './projects.module';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports: [ProjectsModule],
      providers:[
        { provide: HttpClient },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create', () => {
    expect(component).toBeTruthy();
    
  });
  it('should create tabekl in projects Cards', () => {
    component.dataItem =[{
      id: 1,
      people:["Kacper Jan"],
      name: "Name",
      discription: "discription",
      level: "low",
      time: "30.11.2022"
    },];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});