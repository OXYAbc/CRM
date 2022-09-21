import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabfilterComponent } from './tabfilter.component';

describe('TabfilterComponent', () => {
  let component: TabfilterComponent;
  let fixture: ComponentFixture<TabfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
