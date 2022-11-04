import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../users.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-cards-users',
  templateUrl: './cards-users.component.html',
  styleUrls: ['./cards-users.component.scss'],
})
export class CardsUsersComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'position',
    'viewMore',
  ];
  user!: User;
  isLoading = false
  displaySearch = true
  searchName!: string;

  constructor(public dialog: Dialog, private userService: UsersService) {}
  @Input() users: User[] = [];
  onGetDetail(event: User) {
    return this.userService.getUser(event.id).subscribe((item) => {
      this.user = item as User;
      this.user.id = event.id;
    });
  }

  openAddtask() {
    const dialogRef = this.dialog.open(AddUserComponent, {data: this.users});
    dialogRef.closed.subscribe(res => {
      if(res){
        this.userService.addUser(res as User)
      }
    })
  }
  toggleSearchButtonVisibility() {
    this.displaySearch = !this.displaySearch;
  }
}
