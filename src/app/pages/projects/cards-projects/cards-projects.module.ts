import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CardsProjectsComponent } from './cards-projects.component';

@NgModule({ imports: [CdkTableModule], declarations: [CardsProjectsComponent], providers: [ ], exports: [CardsProjectsComponent] })
export class CardsProjectsModule {}