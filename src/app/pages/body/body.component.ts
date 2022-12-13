import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NavBar } from 'src/app/models/nav-bar.models';
import { DarkModeState } from 'src/app/shared/thememode.state';
import { BodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  navbarData: NavBar[] = [];
  @Select(DarkModeState) darkMode$?: Observable<boolean>;

  constructor(private bodyService: BodyService) {
  }
  
  ngOnInit(): void {
    this.bodyService
      .getData()
      .subscribe((results) => (this.navbarData = results));
    this.bodyService.getFontSize().subscribe((res: any) => {
      document.body.style.fontSize = `${res}px`;
    });
    this.darkMode$?.pipe().subscribe((res: any)=> {
      res.darkmode? document.body.classList.add('dark-mode'): document.body.classList.remove('dark-mode')
    })

  }
}
