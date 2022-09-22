import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { ProjectsData } from 'src/app/models/projects.model';

const ELEMENT_DATA: ProjectsData[] = [
  {
    id: 1,
    name: 'Name',
    discription: 'discription',
    level: 'low',
    time: '30.11.2022',
  },
  {
    id: 2,
    name: 'Name',
    discription: 'discription',
    level: 'low',
    time: '30.11.2022',
  },
  {
    id: 3,
    name: 'Name',
    discription: 'discription',
    level: 'low',
    time: '30.11.2022',
  },
  {
    id: 4,
    name: 'Name',
    discription: 'discription',
    level: 'low',
    time: '30.11.2022',
  },
  {
    id: 5,
    name: 'Nameg',
    discription: 'discription',
    level: 'low',
    time: '30.11.2022',
  },
];

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent{
  displayedColumns: string[] = ['id', 'name', 'discription', 'level', 'time'];
  dataSource = new ExampleDataSource();
}
export class ExampleDataSource extends DataSource<ProjectsData> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<ProjectsData[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProjectsData[]> {
    return this.data;
  }

  disconnect() {}
}
