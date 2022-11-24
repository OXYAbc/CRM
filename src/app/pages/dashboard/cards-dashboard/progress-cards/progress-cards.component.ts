import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project, Task } from 'src/app/models/projects.model';

@Component({
  selector: 'app-progress-cards',
  templateUrl: './progress-cards.component.html',
  styleUrls: ['./progress-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCardComponent {
  @Input() projects: Project[] = [];
}
