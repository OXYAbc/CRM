import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { CardsUsersComponent } from './cards-users.component';

@NgModule({ imports: [CdkTableModule], declarations: [CardsUsersComponent], exports: [] })
export class CardsUsersModule {}
