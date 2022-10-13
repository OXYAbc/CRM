import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/models/user.model';

@Component({
  selector: 'app-data-detail-view',
  templateUrl: './data-detail-view.component.html',
  styleUrls: ['./data-detail-view.component.scss'],
})
export class DataDetailViewComponent {
  @Input() SingleDataDetails: UserData | undefined;
}
