import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {}
  logout() {
    this.loginService.logout();
  }
}
