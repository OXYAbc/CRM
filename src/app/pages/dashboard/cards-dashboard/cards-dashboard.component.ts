import { Component, Input, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { ProjectsData } from 'src/app/models/projects.model';



export interface PeriodicElement {
  title: string;
  discription: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: "New Task", discription: 'Hydrogen'},
  {title: "New Task", discription: 'Helium'},
  {title: "New Task", discription: 'Lithium'},
  {title: "New Task", discription: 'Beryllium'},
  {title: "New Task", discription: 'Boron'},
  {title: "New Task", discription: 'Carbon'},
  {title: "New Task", discription: 'Nitrogen'},
  {title: "New Task", discription: 'Oxygen'},
  {title: "New Task", discription: 'Fluorine'},
  {title: "New Task", discription: 'Neon'},
];

@Component({
  selector: 'app-cards-dashboard',
  templateUrl: './cards-dashboard.component.html',
  styleUrls: ['./cards-dashboard.component.scss']
})
export class CardsDashboardComponent{
  @Input() DataProjects: ProjectsData[]=[];
  displayedColumns: string[] = ['title', 'discription', "viewMore"];
  dataSource = new ExampleDataSource();

}
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
