import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent {
  @Input() users: User[] = [];
  @Input() search!: string;
  @Output() userEmitter = new EventEmitter<User>();
  isLoading = false;
  tableUsers!: User[];
  displayedColumns: string[] = ['name', 'surname', 'position', 'viewMore'];
  constructor() {}

  showDetails(element: User) {
    this.userEmitter.emit(element);
  }
}
