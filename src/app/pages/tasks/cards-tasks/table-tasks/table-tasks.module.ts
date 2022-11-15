import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableTasksComponent } from './table-tasks.component';

@NgModule({
  imports: [CdkTableModule, RouterModule],
  declarations: [TableTasksComponent],
  providers: [],
  exports: [TableTasksComponent],
})
export class TableTasksModule {}
