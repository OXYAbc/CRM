import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/user.model';

@Component({
  selector: 'app-cards-users',
  templateUrl: './cards-users.component.html',
  styleUrls: ['./cards-users.component.scss']
})
export class CardsUsersComponent{
  displayedColumns: string[] = ['id', 'name', 'surname', "position", "viewMore"];

  @Input() DataUsers:UserData[] = [];

}
