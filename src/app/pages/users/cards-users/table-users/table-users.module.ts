import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { TableUsersComponent } from './table-users.component';

@NgModule({
  imports: [CdkTableModule],
  declarations: [TableUsersComponent],
  providers: [],
  exports: [TableUsersComponent],
})
export class TableUsersModule {}
