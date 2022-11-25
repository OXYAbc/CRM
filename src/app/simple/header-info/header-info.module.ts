import { CdkMenuModule } from '@angular/cdk/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { HeaderInfoComponent } from './header-info.component';

@NgModule({
  imports: [CdkMenuModule, RouterModule],
  declarations: [HeaderInfoComponent],
  providers: [LoginService],
  exports: [HeaderInfoComponent],
})
export class HeaderInfoModule {}
