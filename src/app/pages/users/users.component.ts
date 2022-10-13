import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private cardUsersService: UsersService) {}

  ngOnInit(): void {
    this.cardUsersService.users$.subscribe((results) => (this.users = results));
  }
}
