import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-cards-body',
  templateUrl: './cards-body.component.html',
  styleUrls: ['./cards-body.component.scss'],
})
export class CardsBodyComponent implements OnInit {
  @Input() dataItems: Project[] = [];

  ngOnInit(): void {}
}
