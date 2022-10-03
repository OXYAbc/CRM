import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/models/user.model';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-cards-users',
  templateUrl: './cards-users.component.html',
  styleUrls: ['./cards-users.component.scss']
})
export class CardsUsersComponent{
  displayedColumns: string[] = ['id', 'name', 'surname', "position", "viewMore"];
  singleData:UserData | undefined;

  
  constructor (public dialog: Dialog){}
  @Input() DataUsers:UserData[] = [];
  ShowDetail(event: any){
    this.singleData = event;
    console.log(this.singleData)
  }

  openAddtask(){
    this.dialog.open(AddUserComponent)
  }
}
