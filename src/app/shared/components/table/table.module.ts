import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CdkTableModule, RouterModule, CommonModule],
  declarations: [TableComponent],
  providers: [],
  exports: [TableComponent],
})
export class TableModule {}
