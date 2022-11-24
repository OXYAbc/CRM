import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { CardsModule } from 'src/app/shared/card.module';
import { DarkModeToggleComponent } from 'src/app/simple/dark-mode-toggle.component';
import { BodyService } from '../body/body.service';
import { SettingsComponent } from './settings.component';

@Injectable()
class BodyServiceMock {
  onResizeFont(size: number) {}
}

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let service: BodyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent, DarkModeToggleComponent],
      imports: [BrowserTestingModule, HttpClientModule, CardsModule],
      providers: [{ provide: BodyService, useClass: BodyServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    service = TestBed.inject(BodyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change the font size number', () => {
    component.resizeFont(1);
    expect(component.fontSize).toBe(11);
  });
  it('should call to resize method ', () => {
    const reSizeSpy = spyOn(component, 'resizeFont');
    const resizeBtn = fixture.nativeElement.querySelector('.btn');
    resizeBtn.click();
    expect(reSizeSpy).toHaveBeenCalled();
  });
  it('should call to onResizeFont method ', () => {
    const onResizeFontSpy = spyOn(service, 'onResizeFont');
    const resizeBtn = fixture.nativeElement.querySelector('.btn');
    resizeBtn.click();
    expect(onResizeFontSpy).toHaveBeenCalledWith(11);
  });
});
