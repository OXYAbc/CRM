import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDataComponent } from './empty-data.component';

describe('EmptyDataComponent', () => {
  let component: EmptyDataComponent;
  let fixture: ComponentFixture<EmptyDataComponent>;
  let icon: string = 'uil uil-user'
  let type: string = 'user'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyDataComponent);
    component = fixture.componentInstance;
    component.icon = icon
    component.typeOfData = type
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display user', ()=>{
    fixture.detectChanges();
    const text = fixture.nativeElement.querySelector('.empty-data-title');
    expect(text.textContent).toBe(" No user selected Select user to view details")
  })
  it('should check icon binding', ()=>{
    const iconHTML = fixture.nativeElement.querySelector('i');
    expect(iconHTML.classList).toContain('uil-user')
  })
});
