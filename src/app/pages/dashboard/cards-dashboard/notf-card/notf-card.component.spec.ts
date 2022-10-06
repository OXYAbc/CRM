import { CdkTable, CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfCardComponent } from './notf-card.component';

describe('NotfCardComponent', () => {
  let component: NotfCardComponent;
  let fixture: ComponentFixture<NotfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfCardComponent ],
      imports: [CdkTableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
