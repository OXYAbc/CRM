import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CardsProjectsComponent } from './cards-projects.component';
import { CommonModule } from '@angular/common';
import { TableProjectsModule } from './table-projects/table-projects.module';
import { ProjectDetailViewModule } from './project-detail-view/project-detail-view.module';

@NgModule({
  imports: [
    CdkTableModule,
    CommonModule,
    TableProjectsModule,
    ProjectDetailViewModule,
  ],
  declarations: [CardsProjectsComponent],
  providers: [],
  exports: [CardsProjectsComponent],
})
export class CardsProjectsModule {}
