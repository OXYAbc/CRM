import { Component, Input, OnInit } from '@angular/core';
import { NavBar } from 'src/app/models/nav-bar.models';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() navData: NavBar[] = [];

  ngOnInit(): void {
    console.log(this.navData);
  }

}
