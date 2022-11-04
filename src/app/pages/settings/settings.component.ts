import { Component } from '@angular/core';
import { BodyService } from '../body/body.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private bodyService: BodyService){}
  public fontSize: number = 10;
  public date = new Date().toJSON().slice(0, 4)
  resizeFont(value: number){
    this.fontSize += value
    this.bodyService.onResizeFont(this.fontSize)
  }
}
