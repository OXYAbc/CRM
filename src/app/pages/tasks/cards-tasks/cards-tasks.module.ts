import { NgModule } from '@angular/core';
import { CardsTasksComponent } from './cards-tasks.component';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { DetailViewModule } from './detail-view/detail-view.module';
import { CommonModule } from '@angular/common';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { TableTasksComponent } from './table-tasks/table-tasks.component';
import { TableTasksModule } from './table-tasks/table-tasks.module';
import { FormsModule } from '@angular/forms';

@NgModule({ imports: [ DialogModule, CdkTableModule, DetailViewModule, CommonModule, ControlPanelModule, TableTasksModule, FormsModule ], declarations: [CardsTasksComponent], providers: [ ], exports: [CardsTasksComponent] })
export class CardsTasksModule {}
