import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private bodyService: AppService) {}
  public fontSize: number = 10;
  public date = new Date().toJSON().slice(0, 4);
  resizeFont(value: number) {
    this.fontSize += value;
    this.bodyService.onResizeFont(this.fontSize);
  }
}
