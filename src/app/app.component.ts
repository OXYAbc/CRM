import { Component } from '@angular/core';
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
  @Select(DarkModeState) darkMode$?: Observable<boolean>;

  constructor(private appService: AppService) {
    this.appService.getFontSize().subscribe((res: any) => {
      document.body.style.fontSize = `${res}px`;
    });
    this.darkMode$?.pipe().subscribe((res: any) => {
      res.mode
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode');
    });
  }
}
