import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/models/user.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent{
  @Input() dataItems: UserData[]=[];
  @Output() DataEmitter = new EventEmitter<UserData[]>();
  displayedColumns: string[] = ['id', 'name', 'surname', "position", "viewMore"]; 

  showDetails(element: UserData[]){
    this.DataEmitter.emit(element);
  }

}
