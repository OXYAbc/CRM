import { Dialog } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CardsTasksComponent } from './cards-tasks.component';
import { CardsTasksModule } from './cards-tasks.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';

describe('CardsTasksComponent', () => {
  let component: CardsTasksComponent;
  let fixture: ComponentFixture<CardsTasksComponent>;
  let service: Dialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsTasksModule],
      declarations: [CardsTasksComponent, ControlPanelComponent],
      providers: [Dialog],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsTasksComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(Dialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open dialog window', () => {
    
    const openDialogSpy = spyOn(service, 'open');
    component.openDialog();
    fixture.detectChanges();
    
    // spyOn(component.dialog, 'openDialog').and.callFake(...);
    // spyOn(component.dialog, 'openDialog').and.callThrough();
    // spyOn(component.dialog, 'open');
    // fixture.detectChanges()
    // expect(openDialogSpy).toHaveBeenCalled();
    // const taskForm = fixture.debugElement.nativeElement.querySelector('.ContentForm');
    expect(openDialogSpy).toHaveBeenCalled();

    
    // expect(taskForm.children.length).toBe(1);
    // expect(dialogWindow.open.calls.count()).toBe(1);
    // expect(component.dialog).toBeDefined
  });
  it('should creat tabel', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table.tagName).toBe('TABLE');
    expect(table.childElementCount).toBeGreaterThan(0);
  });
  it('buttons should have text Show more', () => {
    component.DataItem = [
      {
        id: "1",
        name: 'adawdaw',
        discription: 'string',
        deadline: 'string',
        comments: [{ user: 'string', comments: ['string'] }],
        check: true,
        level: 'string',
      },
    ];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons[0].textContent).toBe('Show more');
  });
  it('should creat buttons in list in table', () => {
    component.DataItem = [
      {
        id: "1",
        name: 'adawdaw',
        discription: 'string',
        deadline: 'string',
        comments: [{ user: 'string', comments: ['string'] }],
        check: true,
        level: 'string',
      },
    ];
    fixture.detectChanges();
    const table = fixture.debugElement.nativeElement.querySelector('table');
    const buttons = table.querySelectorAll('.btn');
    expect(buttons.length).toBeGreaterThan(0);
  });
  it('open detailView',()=>{
    component.viewDetails({check: true,
      comments:[
        {user: 'Kuba Pasek Łyń', comments: 'Potrzebna modernicacja w tytule taska'},
        {user: 'Agata Łyń', comments: 'Potrzebna modernicacja w tytule taska'},
      ],
      length: 2,
      deadline: "2022-12-31",
      discription: "Lorem ipsum",
      id: 1,
      level: "low",
      name: "Simple Task"}
    );
      fixture.detectChanges();
      const detailView = fixture.nativeElement.querySelector(".detail");
      expect(detailView.nodeName).toBe("DIV");
      const headerDetail = detailView.querySelector("h2");
      expect(headerDetail.textContent).toBe("Simple Task");
      const discription = detailView.querySelector(".discription");
      const discriptionContent = discription.querySelector(".discriptionContent");
      expect(discriptionContent.textContent).toBe(" Lorem ipsum ");
    });
});
