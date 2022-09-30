import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      imports: [AppModule],
      providers:[
        { provide: HttpClient },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create tabel in tasks Cards', () => {
    component.dataItem =[{check: true,
      comments:[
        {user: 'Kuba Pasek Łyń', comments: ['Potrzebna modernicacja w tytule taska']}
      ],
      deadline: "2022-12-31",
      discription: "Lorem ipsum",
      id: 1,
      level: "low",
      name: "Simple Task"}];
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
});
