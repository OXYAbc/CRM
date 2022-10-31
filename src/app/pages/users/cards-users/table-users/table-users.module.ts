import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableUsersComponent } from './table-users.component';

@NgModule({
  imports: [CdkTableModule, CommonModule],
  declarations: [TableUsersComponent],
  providers: [],
  exports: [TableUsersComponent], 
})
export class TableUsersModule {}
