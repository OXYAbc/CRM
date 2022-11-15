import { NgModule } from '@angular/core';
import { CardsProjectsComponent } from './cards-projects.component';
import { CommonModule } from '@angular/common';
import { TableProjectsModule } from './table-projects/table-projects.module';
import { DetailViewModule } from './detail-view/detail-view.module';
import { AddProjectModule } from './add-project/add-project.module';
import { FormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, TableProjectsModule, DetailViewModule, AddProjectModule, FormsModule], declarations: [CardsProjectsComponent], providers: [ ], exports: [CardsProjectsComponent] })
export class CardsProjectsModule {}