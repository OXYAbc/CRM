import { Component, OnInit } from '@angular/core';
import { projectsData } from '../../data/projectsData';

export interface projectsData {
  id: number,
  name: string,
  discription: string,
  level: string,
  time: string,
}

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  dataSource  = projectsData;
  constructor() { }

  ngOnInit(): void {
  }

}
