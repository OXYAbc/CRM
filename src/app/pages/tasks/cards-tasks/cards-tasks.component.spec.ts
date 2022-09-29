import { Dialog } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { finalize } from 'rxjs';
import { AppModule } from 'src/app/app.module';

import { CardsTasksComponent } from './cards-tasks.component';

describe('CardsTasksComponent', () => {
  let component: CardsTasksComponent;
  let dialogSpy : jasmine.Spy
  let fixture: ComponentFixture<CardsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ CardsTasksComponent ],
      providers:[
        { provide: Dialog, useValue: dialogSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open dialog window', ()=>{
    component.openDialog();
    const taskForm = fixture.debugElement.nativeElement.querySelector('.ContentForm');
    expect(taskForm.children.length).toBe(1);
  });
  it('should creat tabel', ()=>{
    const table = fixture.debugElement.nativeElement.querySelector("table");
    expect(table.tagName).toBe("TABLE");
    expect(table.childElementCount).toBeGreaterThan(0)
  });
  it('should creat buttons list in table', () =>{
    const table = fixture.debugElement.nativeElement.querySelector("table");
    const buttons = table.querySelectorAll(".btn");
    expect(buttons.length).toBeGreaterThan(0);
  })
});
