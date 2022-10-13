import { CdkMenuModule } from '@angular/cdk/menu';
import { NgModule } from '@angular/core';
import { HeaderInfoComponent } from './header-info.component';

@NgModule({
  imports: [CdkMenuModule],
  declarations: [HeaderInfoComponent],
  providers: [],
  exports: [HeaderInfoComponent],
})
export class HeaderInfoModule {}
