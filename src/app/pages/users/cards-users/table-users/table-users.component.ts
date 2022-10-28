import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
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
  constructor() {
    this.tableUsers = this.users;
  }

  ngOnChanges() {
    this.onSearch();
  }

  showDetails(element: User) {
    this.userEmitter.emit(element);
  }
  onSearch() {
    this.isLoading = true;
    if (this.users.length == 0) this.tableUsers = this.users;
    this.tableUsers = this.users.filter((res) => {
      if (!this.users || !this.search) {
        return (this.tableUsers = this.users);
      } else {
        (error: any) => console.log(error);
      }
      return res.firstName
        .toLocaleLowerCase()
        .includes(this.search.toLocaleLowerCase()) || res.lastName
        .toLocaleLowerCase()
        .includes(this.search.toLocaleLowerCase()) || (res.firstName + " " + res.lastName).toLocaleLowerCase()
        .includes(this.search.toLocaleLowerCase());
    });
  }
}
