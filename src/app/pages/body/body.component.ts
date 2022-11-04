import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavBar } from 'src/app/models/nav-bar.models';
import { BodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  navbarData: NavBar[] = [];
  constructor(private bodyService: BodyService) {
  }
  
  ngOnInit(): void {
    this.bodyService
      .getData()
      .subscribe((results) => (this.navbarData = results));
    this.bodyService.getFontSize().subscribe((res: any) => {
      document.body.style.fontSize = `${res}px`;
    });
  }
}
