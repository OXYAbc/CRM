import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { TableTasksComponent } from './table-tasks.component';

@NgModule({
  imports: [CdkTableModule],
  declarations: [TableTasksComponent],
  providers: [],
  exports: [TableTasksComponent],
})
export class TableTasksModule {}
