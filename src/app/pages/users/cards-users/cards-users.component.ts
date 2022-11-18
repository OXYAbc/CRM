import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-card-users',
  templateUrl: './cards-users.component.html',
  styleUrls: ['./cards-users.component.scss'],
})
export class CardsUsersComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'position',
    'viewMore',
  ];
  columnDef = [
    {
      cdkColumnDef: 'id',
      cdkColumnDefTitle: 'Id',
    },
    {
      cdkColumnDef: 'firstName',
      cdkColumnDefTitle: 'first name',
    },
    {
      cdkColumnDef: 'lastName',
      cdkColumnDefTitle: 'last name',
    },
    {
      cdkColumnDef: 'position',
      cdkColumnDefTitle: 'position',
    },
  ];
  user!: User;
  isLoading = false;
  displaySearch = true;
  searchName!: string;

  constructor(public dialog: Dialog, private userService: UsersService) {}
  @Input() users: User[] = [];
  onGetDetail(id: string) {
    return this.userService.getUser(id).subscribe((item) => {
      this.user = item as User;
      this.user.id = id;
    });
  }

  openAddtask() {
    const dialogRef = this.dialog.open(AddUserComponent, { data: this.users });
    dialogRef.closed.subscribe((res) => {
      if (res) {
        this.userService.addUser(res as User);
      }
    });
  }
  search(event: any) {
    this.userService.setSearchWord(event.target.value);
  }

  toggleSearchButtonVisibility() {
    this.displaySearch = !this.displaySearch;
  }
}
