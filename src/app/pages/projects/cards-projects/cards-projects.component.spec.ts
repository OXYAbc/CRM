import { DialogModule } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Project } from 'src/app/models/projects.model';

import { CardsProjectsComponent } from './cards-projects.component';

describe('CardsProjectsComponent', () => {
  let component: CardsProjectsComponent;
  let fixture: ComponentFixture<CardsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsProjectsComponent],
      imports: [CdkTableModule, RouterTestingModule, DialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabel in projectstabs, with data ', () => {
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
