import { Component, Input, OnInit } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';

@Component({
  selector: 'app-cards-body',
  templateUrl: './cards-body.component.html',
  styleUrls: ['./cards-body.component.scss']
})
export class CardsBodyComponent implements OnInit {
  @Input() dataItems: ProjectsData[] = [];

  ngOnInit(): void {
  }

}
