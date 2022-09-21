import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      discription: {
        title: 'Discription',
        type: 'string',
      },
      level: {
        title: 'level of important',
        type: 'string',
      },
      time: {
        title: 'deadline',
        type: 'string',
      },
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
