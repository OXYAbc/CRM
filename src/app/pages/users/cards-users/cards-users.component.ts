import { Dialog } from '@angular/cdk/dialog';
import {
  AfterViewChecked,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UserData } from 'src/app/models/user.model';
import { UsersService } from '../users.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-cards-users',
  templateUrl: './cards-users.component.html',
  styleUrls: ['./cards-users.component.scss'],
})
export class CardsUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'position',
    'viewMore',
  ];
  displayData = false;
  isLoading = true;
  displaySearch = true;
  name!: String;
  user: any;

  constructor(public dialog: Dialog, private cardUsersService: UsersService) {}
  @Input() DataUsers: UserData[] = [];

  ngOnInit(): void {
    this.isLoading = false;
  }

  // display and hide functions
  ShowSearch() {
    this.displaySearch = !this.displaySearch;
  }
  openAddtask() {
    this.dialog.open(AddUserComponent);
  }

  // Modify data on screen
  search() {
    this.isLoading = true;
    this.DataUsers = this.DataUsers.filter((res) => {
      if (!this.DataUsers || !this.name) {
        this.cardUsersService.getUsers().subscribe((results) => {
          this.DataUsers = results;
          console.log(results);
        });
      } else {
        (error: any) => console.log(error);
      }
      return res.firstName
        .toLocaleLowerCase()
        .match(this.name.toLocaleLowerCase());
    });
  }

  // UserService functions
  getUserDetail(event: UserData) {
    this.cardUsersService.getUser(event.userId).subscribe((response) => {
      this.user = response;
    });
    this.displayData = true;
  }
}
