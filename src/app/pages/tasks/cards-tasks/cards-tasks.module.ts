import { NgModule } from '@angular/core';
import { CardsTasksComponent } from './cards-tasks.component';
import { DialogModule } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { DetailViewModule } from './detail-view/detail-view.module';

@NgModule({ imports: [ DialogModule, CdkTableModule, DetailViewModule ], declarations: [CardsTasksComponent], providers: [ ], exports: [CardsTasksComponent] })
export class CardsTasksModule {}
