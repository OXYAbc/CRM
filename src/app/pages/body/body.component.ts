import { Component, OnInit } from '@angular/core';
import { NavBar } from 'src/app/models/nav-bar.models';
import { BodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  navbarData : NavBar[] = [];
  constructor(private sideBarService: BodyService) { }

  ngOnInit(): void {
    this.sideBarService.getData().subscribe(results=> (this.navbarData = results));
  }

}
