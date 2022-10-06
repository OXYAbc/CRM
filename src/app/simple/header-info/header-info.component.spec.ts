import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoComponent } from './header-info.component';
import { HeaderInfoModule } from './header-info.module';

describe('HeaderInfoComponent', () => {
  let component: HeaderInfoComponent;
  let fixture: ComponentFixture<HeaderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderInfoComponent],
      imports: [HeaderInfoModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
