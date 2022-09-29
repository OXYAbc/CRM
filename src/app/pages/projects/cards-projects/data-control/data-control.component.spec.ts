import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { DataControlComponent } from './data-control.component';

describe('DataControlComponent', () => {
  let component: DataControlComponent;
  let fixture: ComponentFixture<DataControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ DataControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
