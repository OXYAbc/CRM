import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/user.model';
import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataItem : UserData[] = [];
  constructor(private cardUsersService: UsersService) { }

  ngOnInit(): void {
    this.cardUsersService.getUsers().subscribe(results=> {this.dataItem = results; console.log(results)});
  }
}


