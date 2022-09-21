import { Component, OnInit } from '@angular/core';
import { projectsData } from '../../data/projectsData';


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
