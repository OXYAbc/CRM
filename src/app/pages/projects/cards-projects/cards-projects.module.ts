import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CardsProjectsComponent } from './cards-projects.component';
import { CommonModule } from '@angular/common';

@NgModule({ imports: [CdkTableModule, CommonModule], declarations: [CardsProjectsComponent], providers: [ ], exports: [CardsProjectsComponent] })
export class CardsProjectsModule {}