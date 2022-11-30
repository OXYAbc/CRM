import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertMessageComponent } from './alert-message.component';

describe('AlertComponent', () => {
  let component: AlertMessageComponent;
  let fixture: ComponentFixture<AlertMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertMessageComponent],
      imports: [DialogModule],
      providers: [
        {
          provide: DialogRef,
          useValue: { data: { type: 'data' } },
        },
        {
          provide: DIALOG_DATA,
          useValue: {
            type: 'data',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call to approveMoveToTrash', ()=>{
    const spyOnMethod = spyOn( component, 'approveMoveToTrash')
    const btnApprove = fixture.nativeElement.querySelectorAll('button')[0]
    btnApprove.click()
    expect(spyOnMethod).toHaveBeenCalled()
  })
  it('should call to cancelTrash', ()=>{
    const spyOnMethod = spyOn( component, 'cancelTrash')
    const btnCancel = fixture.nativeElement.querySelectorAll('button')[1]
    btnCancel.click()
    expect(spyOnMethod).toHaveBeenCalled()
  })
});
