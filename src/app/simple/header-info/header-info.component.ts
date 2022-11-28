import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { UserDashboardComponent } from 'src/app/pages/user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  user: any;
  constructor(private loginService: LoginService, private dialog: Dialog) {}
  ngOnInit(): void {
    this.loginService.getUser().subscribe((res) => (this.user = res._delegate));
  }
  logout() {
    this.loginService.logout();
  }
  openProfile() {
    let dialogRef = this.dialog.open(UserDashboardComponent, {
      data: { user: this.user },
    });
    const sub = dialogRef.componentInstance?.onAdd.subscribe((res) => {
      this.loginService.setDetails(res);
    });
  }
}
