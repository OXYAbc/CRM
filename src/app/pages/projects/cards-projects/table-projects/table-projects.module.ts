import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableProjectsComponent } from './table-projects.component';

@NgModule({
  imports: [CdkTableModule, RouterModule],
  declarations: [TableProjectsComponent],
  providers: [],
  exports: [TableProjectsComponent],
})
export class TableProjectsModule {}
