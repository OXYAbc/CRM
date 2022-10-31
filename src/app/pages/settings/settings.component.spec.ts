import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [BrowserTestingModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change the font size number', () =>{
    component.resizeFont(1)
    expect(component.fontSize).toBe(11)
  })
});
