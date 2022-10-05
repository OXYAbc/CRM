import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardsProjectsComponent } from './cards-projects.component';

describe('CardsProjectsComponent', () => {
  let component: CardsProjectsComponent;
  let fixture: ComponentFixture<CardsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsProjectsComponent ],
      imports: [CdkTableModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabel in projectstabs, with data ', () =>{
    component.DataProjects =[
    {
      id: 55,
      name: "Name",
      people:["Kacper Jan"],
      discription: "discription",
      level: "low",
      time: "30.11.2022"
    }];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    console.log(table.innerHTML);
    // const rowThead = thead.querySelectorAll('tr')
    expect(table.childElementCount).toBeGreaterThan(0)
  });
});
