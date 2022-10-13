import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent {
  @Input() dataItems: User[] = [];
  @Output() DataEmitter = new EventEmitter<User[]>();
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'position',
    'viewMore',
  ];

  showDetails(element: User[]) {
    this.DataEmitter.emit(element);
  }
}
