import { CdkMenuModule } from '@angular/cdk/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderInfoComponent } from './header-info.component';

@NgModule({
  imports: [CdkMenuModule, RouterModule],
  declarations: [HeaderInfoComponent],
  providers: [],
  exports: [HeaderInfoComponent],
})
export class HeaderInfoModule {}
