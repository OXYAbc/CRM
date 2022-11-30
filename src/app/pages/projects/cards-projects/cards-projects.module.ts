import { NgModule } from '@angular/core';
import { CardsProjectsComponent } from './cards-projects.component';
import { CommonModule } from '@angular/common';
import { DetailViewModule } from './detail-view/detail-view.module';
import { AddProjectModule } from './add-project/add-project.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CardsModule } from 'src/app/shared/card.module';
import { EmptyDataModule } from 'src/app/shared/components/empty-data/empty-data.module';

@NgModule({
  imports: [
    CommonModule,
    DetailViewModule,
    AddProjectModule,
    FormsModule,
    TableModule,
    CardsModule,
    EmptyDataModule
  ],
  declarations: [CardsProjectsComponent],
  providers: [],
  exports: [CardsProjectsComponent],
})
export class CardsProjectsModule {}
