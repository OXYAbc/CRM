import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { DarkModeState } from './shared/thememode.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CRM';
  @Select(DarkModeState) darkMode$?: Observable<{ mode: boolean }>;

  constructor(
    private appService: AppService,
    private elementRef: ElementRef,
    private overlayContainer: OverlayContainer
  ) {
    const container = this.overlayContainer.getContainerElement();
    this.appService.getFontSize().subscribe((res: any) => {
      document.body.style.fontSize = `${res}px`;
    });
    this.darkMode$?.pipe().subscribe((darkMode: any) => {
      this.elementRef.nativeElement.classList.toggle('dark-mode', darkMode.mode);
      container.classList.toggle('dark-mode', darkMode.mode);
    });
  }
}
