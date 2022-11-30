import { NgModule } from '@angular/core';
import { CardsUsersComponent } from './cards-users.component';
import { AddUserModule } from './add-user/add-user.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CardsModule } from 'src/app/shared/card.module';
import { DataDetailViewModule } from './data-detail-view/data-detail-view.module';
import { EmptyDataModule } from 'src/app/shared/components/empty-data/empty-data.module';


@NgModule({
  imports: [
    DataDetailViewModule,
    AddUserModule,
    CommonModule,
    FormsModule,
    TableModule,
    CardsModule,
    EmptyDataModule
  ],
  declarations: [CardsUsersComponent],
  exports: [CardsUsersComponent],
})
export class CardsUsersModule {}
