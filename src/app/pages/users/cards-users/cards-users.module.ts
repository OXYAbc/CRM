import { NgModule } from '@angular/core';
import { CardsUsersComponent } from './cards-users.component';
import { DataDetailViewModule } from './data-detail-view/data-detail-view.module';
import { TableUsersModule } from './table-users/table-users.module';
import { AddUserModule } from './add-user/add-user.module';

@NgModule({ imports: [DataDetailViewModule, TableUsersModule, AddUserModule], declarations: [CardsUsersComponent], exports: [CardsUsersComponent] })
export class CardsUsersModule {}
