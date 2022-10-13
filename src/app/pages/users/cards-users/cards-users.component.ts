import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
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
  singleData: User | undefined;
  displayData = false;

  constructor(public dialog: Dialog) {}
  @Input() DataUsers: User[] = [];
  ShowDetail(event: any) {
    this.singleData = event;
    this.displayData = true;
  }

  openAddtask() {
    this.dialog.open(AddUserComponent);
  }
}
